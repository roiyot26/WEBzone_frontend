// React
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
// Actions
import { setUserMsg } from '../../../store/auth.action';
import { createRoom } from '../../../store/wap.action';
import { setBoardSize } from '../../../store/editor.action';
// Assets
import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { SavePublishBtns } from './SavePublishBtns';


export function WapActions() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { wapId } = useParams();


   const onWorkTogether = () => {
      // If user is already in a room but wants to copy a link again
      if (wapId) {
         const BASE_URL = process.env.NODE_ENV === 'production'
            ? `https://webzone-app.herokuapp.com/editor/${wapId}`
            : `localhost:3000/editor/${wapId}`
         navigator.clipboard.writeText(BASE_URL);
         dispatch(setUserMsg({ type: 'success', txt: 'Invitation copied to clipboard !', timer: 7000 }));
         return
      }

      dispatch(createRoom(redirect));
      dispatch(setUserMsg({ type: 'success', txt: 'Invitation copied to clipboard !', timer: 7000 }));
   }

   const onSetBoardSize = (boardSize) => {
      dispatch(setBoardSize(boardSize))
   }

   const redirect = (wapId) => {
      navigate(`/editor/${wapId}`);
   }


   return <div className="wap-actions flex column align-center">

      <div className="media-btns flex justify-between align center">
         <FaDesktop size={28} className='muted' onClick={() => onSetBoardSize('desktop')} />
         <FaTabletAlt size={28} className='muted' onClick={() => onSetBoardSize('tablet')} />
         <FaMobileAlt size={28} className='muted' onClick={() => onSetBoardSize('mobile')} />
      </div>

      <button onClick={onWorkTogether} className='work-together-btn'>Work Together <IoIosPeople /></button>

      <SavePublishBtns />
   </div>
}