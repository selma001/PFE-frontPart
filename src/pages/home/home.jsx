import './home.css'
import RightBar from '../../components/rightbar'
import LeftBar from '../../components/leftbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faEarthAmericas, faMessageLines, faBars, 
    faCheckDouble, faMagnifyingGlass, faEnvelope,faCheck,faClockRotateLeft,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import profilepic from '../../assets/images/profilepic.png';
import Question from '../../components/question'
import { useState } from 'react';
import React from 'react';
import AddQuestion from '../../components/addquestion'



function Home (){

    const [showPopup, setShowPopup] = useState(false); 

    const handleShowPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };

    return(
        <div className='home'>
            <RightBar />
            <div>
            <div className="hmiddles">
                   <div className='sii'>
                      <img src={profilepic} alt="" />
                      <div className='htexts'>
                        <h1>username</h1>
                        <h2><FontAwesomeIcon icon={faEarthAmericas} />    public</h2>
                      </div>
                      <button className='ajtbtn' onClick={handleShowPopup}> ajouter une question</button>
                      {showPopup && <AddQuestion onClose={handleClosePopup} />}
                   </div>
                   <p> Avez vous une question ? </p>
            </div>
             <Question/>
            </div>
            <LeftBar/>
        </div>
    )
}

export default Home