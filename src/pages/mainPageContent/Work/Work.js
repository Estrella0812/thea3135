import {Lock} from 'react-bootstrap-icons'
import { useEffect, useState } from "react"
import './Work.css'

import module12IMG from './img/bangbangcon.jpg'

function Work(){
    const [module, setModule] = useState(false);

    const setModuleCat = (e) =>{
        if(e.target.innerText==="Module 12"){
            setModule(true);
        }
        if(e.target.innerText==="back"){
            setModule(false);
        }
    }

    const moduleWork = [
        <div className="work-container">
            <img className="module-img" src={module12IMG}/>
            <a href="https://twitter.com/bts_bighit/status/1664648069441286149" target="_blank">original image by BTS_official</a>
            <section className="work-written-section">
                <p className="work-subheader">Elements</p>
                <p>
                Typography: use of font for “BangBangCon” as the title. The font is round with an outline. It convinces the audience to read the title first.<br></br>
                Color: Overall, the design uses a soft pastel tone colour. This gives a cosy mood to the image giving the audience a comfortable feeling.<br></br>
                Image: used inside the ticket figure. It represents the theme/mood of each concert<br></br>
                </p>
                <p className="work-subheader">Relationship</p>
                <p>
                Emphasis: the tickets are emphasised with its popping out colour and images. It convinces the audience to look and read what it says in the ticket.<br></br>
                Balance: the main components are distributed to the center of the screen with the name of the team members at the top. This organised distribution of elements allows the viewer to easily recognize the different components.<br></br>
                </p>
                <p className="work-subheader">Gestalt</p>
                <p>
                Similarity: the tickets have a similar shape making it seen as a group while the text at the top are written in the same font making them another group. This allows the viewers to separate and differentiate the components.<br></br>
                </p>
                <p>Overall, the graphic diagram convinces the audience to buy the tickets  and join them in their live streaming concert while being comfortable at home.
    </p>
            </section>
            <button className="work-button" onClick={setModuleCat}>back</button>
        </div>
    ]
    
    const workButtons = [
        <div className="Work-button-container">
            <button className="work-button">Module 12</button>
            <button className="work-button">Module 13 <Lock></Lock></button>
            <button className="work-button">Module 14 <Lock></Lock></button>
            <button className="work-button">Module 15 <Lock></Lock></button>
            <button className="work-button">Module 16 <Lock></Lock></button>
            <button className="work-button">Module 17 <Lock></Lock></button>
            <button className="work-button">Module 18 <Lock></Lock></button>
            <button className="work-button">Module 19 <Lock></Lock></button>
            <button className="work-button">Module 20 <Lock></Lock></button>
        </div>
    ]


    return(
        <>
            {!module && 
            <div className="Work-button-container">
            <button className="work-button" onClick={setModuleCat}>Module 12</button>
            <button className="work-button">Module 13 <Lock></Lock></button>
            <button className="work-button">Module 14 <Lock></Lock></button>
            <button className="work-button">Module 15 <Lock></Lock></button>
            <button className="work-button">Module 16 <Lock></Lock></button>
            <button className="work-button">Module 17 <Lock></Lock></button>
            <button className="work-button">Module 18 <Lock></Lock></button>
            <button className="work-button">Module 19 <Lock></Lock></button>
            <button className="work-button">Module 20 <Lock></Lock></button>
            </div>
            }

            {module && moduleWork}
        </>
    )
}

export default Work;