import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark
} from '@fortawesome/free-solid-svg-icons'

const PopupMenu = ({ onClose,show }) => {

    const handleDelete = () => {
      console.log("Delete button clicked");
      onClose();
    };
  
    return (
      <div className="popup" id="pps">
        <div className="menupoints">
        <FontAwesomeIcon icon={faXmark} className='xx' onClick={handleDelete}/> <br />
        <button  className="supp">Supprimer</button> <br />
        <button className="modif">Modifier</button>
        </div>
      </div>
    );
  };
  
export default PopupMenu;