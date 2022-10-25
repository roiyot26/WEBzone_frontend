// React
import { useEffect, useState } from 'react';
// Services
import { socketService } from '../../../services/socket.service';
import { utilService } from '../../../services/util.service';
// Assets
import { BsCursorFill } from 'react-icons/bs';


export function Cursors({ wapId }) {

    const [cursors, setCursors] = useState([]);

    useEffect(() => {
        socketService.setup();

        return () => socketService.terminate();
    }, [])


    useEffect(() => {
        if (wapId) document.body.addEventListener('mousemove', updateMousePos);

        return () => document.body.removeEventListener('mousemove', updateMousePos);
    }, [wapId])


    useEffect(() => {
        socketService.off('mouse-moved');
        socketService.off('remove-cursor', removeCursor);
        socketService.on('mouse-moved', (newCursor) => utilService.debounce(updateCursors(newCursor)));
        socketService.on('remove-cursor', removeCursor);

        return () => {
            socketService.off('mouse-moved');
            socketService.off('remove-cursor', removeCursor);
        }
    }, [cursors, wapId])


    const updateMousePos = (ev) => {
        const pos = { x: ev.clientX, y: ev.clientY };
        socketService.emit('mouse-move', pos);
    }

    const updateCursors = newCursor => {
        const cursorIdx = cursors.findIndex(cursor => cursor.id === newCursor.id);
        if (cursorIdx >= 0) {
            setCursors(prevCursors => {
                prevCursors[cursorIdx] = newCursor;
                return [...prevCursors];
            })
        } else {
            setCursors(prevCursors => {
                const doesCursorExist = prevCursors.some(cursor => cursor.id === newCursor.id);
                if (doesCursorExist) return prevCursors;
                else return [...prevCursors, newCursor];
            });
        }
    }

    const removeCursor = (cursorId) => {
        const filteredCursors = cursors.filter(cursor => cursor.id !== cursorId);
        setCursors(filteredCursors);
    }


    return <>
        {cursors.length > 0 &&
            cursors.map(cursor => {
                return <div
                    key={cursor.id}
                    style={{
                        position: "fixed",
                        top: cursor.pos.y,
                        left: cursor.pos.x,
                        zIndex: "9999",
                    }}><div style={{ transform: "rotate(-80deg)" }}><BsCursorFill fill={cursor.color} fontSize="1.5rem" /></div>
                    <span
                        style={{
                            display: "block",
                            position: "absolute",
                            left: "15px",
                            top: "20px",
                            backgroundColor: cursor.color,
                            color: "white",
                            padding: "2px 5px",
                            borderRadius: "5px",
                            opacity: ".8"
                        }}
                    >{cursor.nickname}</span>
                </div>
            })}
    </>
}