import { wapService } from '../services/wap.service.js';
import { draftService } from '../services/draft.service.js';
import { templateService } from '../services/template.service.js';
import { utilService } from '../services/util.service.js';
import { socketService } from '../services/socket.service.js';


// *** KEY NOTES *** //
// 1. To load a wap to the editor page, we use getById.
// 2. getById splits to 2 different functions - One loads a wap from USER waps collection, The other loads from TEMPLATE waps collection.
// 3. *IMPORTANT - No matter which wap was loaded to the editor, a DRAFT wap will be created.


// *** CRUD wap actions *** //

// Load wap from USER collection to editor page
export function loadWap(wapId) {
    return async (dispatch) => {

        const wap = await wapService.getById(wapId);

        dispatch({ type: 'SET_WAP', wap });
    }
}

// Load wap from TEMPLATE collection to editor page
export function loadWapTemplate(wapTemplateId) {
    return (dispatch) => {

        let wap = templateService.getWapTemplateById(wapTemplateId);
        wap = JSON.parse(JSON.stringify(wap));
        wapService.replaceIds(wap);
        if (wap._id) delete wap._id;
        draftService.saveDraft(wap);

        dispatch({ type: 'SET_WAP', wap });
    }
}

export function updateWap(elementToUpdate) {
    return (dispatch, getState) => {

        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));

        wapService.findTarget(wap, elementToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = elementToUpdate);
        draftService.saveDraft(wap);

        if (wap.id) socketService.emit('update-wap', wap);

        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

export function saveWap(cb) {
    return async (dispatch, getState) => {

        const { wap } = getState().wapModule;
        const savedWap = await wapService.save(wap);
        draftService.saveDraft(savedWap);
        if (cb) cb(savedWap._id);
        
        dispatch({ type: 'SET_WAP', wap: savedWap });
    }
}


// *** SOCKET wap actions *** //

export function createRoom(redirect) {
    return (dispatch, getState) => {

        const { wap } = getState().wapModule;
        let { user } = getState().userModule;

        wap.id = utilService.getRandomId();
        let nickname = user ? user.nickname : 'Guest';
        draftService.saveDraft(wap);

        socketService.emit('create-room', { wap, nickname });

        dispatch({ type: 'SET_WAP', wap });

        const BASE_URL = process.env.NODE_ENV === 'production'
            ? `https://webzone-app.herokuapp.com/editor/${wap.id}`
            : `localhost:3000/editor/${wap.id}`
        navigator.clipboard.writeText(BASE_URL);

        redirect(wap.id);
    }
}

export function joinRoom(wapId) {
    return (dispatch, getState) => {

        let { user } = getState().userModule;
        let nickname = user ? user.nickname : 'Guest';

        socketService.emit('join-room', { wapId, nickname });
        socketService.on('load-wap', wap => {
            draftService.saveDraft(wap);
            dispatch({ type: 'SET_WAP', wap });
        })
    }
}

export function updateWapInRoom(wap) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}


// *** DRAFT wap actions *** //

export function loadDraftWap() {
    return (dispatch) => {

        const wap = draftService.loadDraft();
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function resetDraftWap() {
    return (dispatch) => {

        const wap = draftService.resetDraft();
        dispatch({ type: 'SET_WAP', wap });
    }
}


// *** ELEMENT wap actions *** //

export function removeElement() {
    return (dispatch, getState) => {

        let { wap } = getState().wapModule;
        let { currElement } = getState().editorModule;
        wap = JSON.parse(JSON.stringify(wap));

        wapService.findTarget(wap, currElement.id, (cmpsArr, idx) => cmpsArr.splice(idx, 1));
        draftService.saveDraft(wap);

        if (wap.id) socketService.emit('update-wap', wap);

        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

// Add element by CLICK
export function addElement(elementToAdd) {
    return (dispatch, getState) => {
        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));
        elementToAdd = JSON.parse(JSON.stringify(elementToAdd));
        wapService.replaceIds(elementToAdd);

        wap.cmps.push(elementToAdd);
        draftService.saveDraft(wap);

        if (wap.id) socketService.emit('update-wap', wap);

        dispatch({ type: 'UPDATE_WAP', wap });
        return elementToAdd;
    }
}

export function duplicateElement() {
    return (dispatch, getState) => {

        let { wap } = getState().wapModule;
        let { currElement } = getState().editorModule;
        wap = JSON.parse(JSON.stringify(wap));
        currElement = JSON.parse(JSON.stringify(currElement));
        const elementId = currElement.id;
        wapService.replaceIds(currElement);

        wapService.findTarget(wap, elementId, (cmpsArr, idx) => cmpsArr.splice(idx, 0, currElement));
        draftService.saveDraft(wap);

        if (wap.id) socketService.emit('update-wap', wap);

        dispatch({ type: 'UPDATE_WAP', wap });
        return currElement;
    }
}

// Handles anything related to drag n drop including Adding/Removing elements
export function switchElement(res) {
    return (dispatch, getState) => {
        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));

        const { destination, source, draggableId } = res;
        // let draggedElement = null;
        // wapService.findTarget(wap, draggableId, (cmpsArr, idx) => {
        //     draggedElement = cmpsArr.splice(idx, 1)[0]
        // })
        // if (destination.droppableId === '156') {
        //     wap.cmps.splice(destination.index, 0, draggedElement)
        // }
        // wapService.findTarget(wap, destination.droppableId, (cmpsArr, idx) => {
        //     cmpsArr[idx][destination.index] = draggedElement
        // })


        // Just into the board
        if (source.droppableId === 'board' &&
            destination.droppableId === 'board') {

            const draggedElement = wap.cmps.splice(source.index, 1)[0];
            wap.cmps.splice(destination.index, 0, draggedElement);
        }

        // From sidebar to board
        else if (source.droppableId === 'sidebar' &&
            destination.droppableId === 'board') {

            let draggedElement = templateService.getTemplateSectionById(draggableId);
            draggedElement = JSON.parse(JSON.stringify(draggedElement));
            wapService.replaceIds(draggedElement);
            wap.cmps.splice(destination.index, 0, draggedElement);
        }

        // From board to garbage
        else {
            wap.cmps.splice(source.index, 1);
        }

        draftService.saveDraft(wap);
        if (wap.id) socketService.emit('update-wap', wap);
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

export function undo() {
    return async (dispatch, getState) => {
        
        const { wapHistory } = getState().wapModule;
        const { currElement } = getState().editorModule;

        if (!wapHistory.length) return;

        let prevWap = wapHistory.pop();
        draftService.saveDraft(prevWap);

        if (prevWap.id) socketService.emit('update-wap', prevWap);

        dispatch({ type: 'UNDO_WAP', wap: prevWap, wapHistory });

        if (currElement) wapService.findTarget(prevWap, currElement.id, (cmpsArr, idx) => {
            dispatch({ type: 'SET_CURR_ELEMENT', element: cmpsArr[idx] });
        })
    }
}