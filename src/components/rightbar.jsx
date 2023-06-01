import usthb from '../assets/images/usthb.png';
import profilepic from '../assets/images/profilepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage,faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RightBar({fix}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    }
    return (
        <div className='sidebar'>
            <img src={usthb} alt="" />
            <h1>Menu</h1>
            <ul>
                <li  className='lili' ><i className='iconli'><FontAwesomeIcon icon={faHouse} /></i>Home</li>
                <li className='lili' href= "#"><i className="iconli"><FontAwesomeIcon icon={faMessage} /> </i> Messages</li>
                <li className='lili'href="#"><i className="iconli"><FontAwesomeIcon icon={faClockRotateLeft} /></i> historique </li>
                <Link to="/editprofp" className='link'><li className='lili' ><FontAwesomeIcon icon={faGear} className="iconli" /> Parametres </li></Link>
                
            </ul>
            <h1 className='act'>Account</h1>
            <div className='prfl'>
                <img src={profilepic} alt="" />
                <div className='infoss'>
                    <h2>Username</h2>
                    <h4>L3 ACAD student</h4>
                </div>

            </div>
        </div>
    )
}

export default RightBar