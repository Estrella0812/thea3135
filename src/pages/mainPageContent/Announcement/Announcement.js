import React, { useState } from "react";

import './Announcement.css'
import {X} from 'react-bootstrap-icons'

function Announcement(){
    const [close, setClose] = useState(false);
    const scrollbarWidth = window.innerWidth - document.body.clientWidth



    const announcement = [
        <h5 className="announcement" style={{width:`calc(100vw - ${scrollbarWidth}px)`}}>This is only a BETA version of the website.<X size={30} className="close-icon" onClick={() => setClose(!close)}></X></h5>
    ]

    return(
        <div className="announcement-container d-flex">
            {!close && announcement}
        </div>
    );
}

export default Announcement;