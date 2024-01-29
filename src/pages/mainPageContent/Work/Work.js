import {Lock} from 'react-bootstrap-icons'
import { useEffect, useState } from "react"
import './Work.css'

import module12IMG from './img/bangbangcon.jpg'

function Work(){
    const [module, setModule] = useState([]);

    const setModuleCat = (e) =>{
        if(e.target.innerText==="Module 12"){
            setModule([
                <div className="work-container">
                <img className="module-img" src={module12IMG}/>
                <a href="https://twitter.com/bts_bighit/status/1664648069441286149" target="_blank">original image by BTS_official</a>
                <section className="work-written-section">
                <div className="textSection">
                    <p className="work-subheader">Elements</p>
                    <p>
                    Typography: use of font for “BangBangCon” as the title. The font is round with an outline making it stick out. It convinces the audience to read the title first.<br></br>
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
                    </div>
                </section>
                <button className="work-button" onClick={setModuleCat}>back</button>
                </div>
            ]);
        }
        if(e.target.innerText==="Module 14"){
            setModule([
                <div className="work-container">
            <section className="work-written-section">
                <div className="textSection">
                    <p>
                    This is your chance to be a part of UNHack 2024 only at York University on January 29th to 31st!<br></br><br></br>
                    UNHack 2024 will take place on January 29th to 31st at the Bergeron Building at York University from 3pm to 9pm to help students keep engaged in developing their creative problem solving skills. Any York University student can participate in this event which gives the student a chance to come up with solutions to a given problem and present it to our sponsors for prizes! Mentors will be assisting students throughout the events providing them with the necessary documents and information. Join us on our 24th UNHack hosted at York University for a chance to prove your skills and win prizes! More information is available at https://estrella0812.github.io/thea3135/ or on Discord.
                    <br></br>
                    <br></br>
                    More information about the event (orientation, opening, ending)<br></br>
                    More information about the judge (sponsors)<br></br>
                    More information about similar events (elleHacks and yuHacks)<br></br>
                    More information about York University<br></br>
                    ###<br></br>
                    Contact Information<br></br>
                    Listing Information

                    </p>
                </div>
            </section>
            <button className="work-button" onClick={setModuleCat}>back</button>
        </div>
            ]);
        }
        if(e.target.innerText==="back"){
            setModule(workButtons);
        }
    }

    // const moduleWork12 = [
    //     <div className="work-container">
    //         <img className="module-img" src={module12IMG}/>
    //         <a href="https://twitter.com/bts_bighit/status/1664648069441286149" target="_blank">original image by BTS_official</a>
    //         <section className="work-written-section">
    //             <p className="work-subheader">Elements</p>
    //             <p>
    //             Typography: use of font for “BangBangCon” as the title. The font is round with an outline making it stick out. It convinces the audience to read the title first.<br></br>
    //             Color: Overall, the design uses a soft pastel tone colour. This gives a cosy mood to the image giving the audience a comfortable feeling.<br></br>
    //             Image: used inside the ticket figure. It represents the theme/mood of each concert<br></br>
    //             </p>
    //             <p className="work-subheader">Relationship</p>
    //             <p>
    //             Emphasis: the tickets are emphasised with its popping out colour and images. It convinces the audience to look and read what it says in the ticket.<br></br>
    //             Balance: the main components are distributed to the center of the screen with the name of the team members at the top. This organised distribution of elements allows the viewer to easily recognize the different components.<br></br>
    //             </p>
    //             <p className="work-subheader">Gestalt</p>
    //             <p>
    //             Similarity: the tickets have a similar shape making it seen as a group while the text at the top are written in the same font making them another group. This allows the viewers to separate and differentiate the components.<br></br>
    //             </p>
    //             <p>Overall, the graphic diagram convinces the audience to buy the tickets  and join them in their live streaming concert while being comfortable at home.
    //             </p>
    //         </section>
    //         <button className="work-button" onClick={setModuleCat}>back</button>
    //     </div>
    // ]

    // const moduleWork14 = [
    //     <div className="work-container">
    //         <section className="work-written-section">
    //             <div className="textSection">
    //                 <p>
    //                 This is your chance to be a part of UNHack 2024 only at York University on January 29th to 31st!<br></br><br></br>
    //                 UNHack 2024 will take place on January 29th to 31st at the Bergeron Building at York University from 3pm to 9pm to help students keep engaged in developing their creative problem solving skills. Any York University student can participate in this event which gives the student a chance to come up with solutions to a given problem and present it to our sponsors for prizes! Mentors will be assisting students throughout the events providing them with the necessary documents and information. Join us on our 24th UNHack hosted at York University for a chance to prove your skills and win prizes! More information is available at https://estrella0812.github.io/thea3135/ or on Discord.
    //                 <br></br>
    //                 <br></br>
    //                 More information about the event (orientation, opening, ending)<br></br>
    //                 More information about the judge (sponsors)<br></br>
    //                 More information about similar events (elleHacks and yuHacks)<br></br>
    //                 More information about York University<br></br>
    //                 ###<br></br>
    //                 Contact Information<br></br>
    //                 Listing Information

    //                 </p>
    //             </div>
    //         </section>
    //         <button className="work-button" onClick={setModuleCat}>back</button>
    //     </div>
    // ]
    
    const workButtons = [
        <div className="Work-button-container">
            <button className="work-button" onClick={setModuleCat}>Module 12</button>
            <button className="work-button" onClick={setModuleCat}>Module 14 </button>
            <button className="work-button">Module 15 <Lock></Lock></button>
            <button className="work-button">Module 16 <Lock></Lock></button>
            <button className="work-button">Module 17 <Lock></Lock></button>
            <button className="work-button">Module 18 <Lock></Lock></button>
            <button className="work-button">Module 19 <Lock></Lock></button>
            <button className="work-button">Module 20 <Lock></Lock></button>
        </div>
    ]


    console.log(module.length);
    return(
        <>
            {module.length==0 ?
            <div className="Work-button-container">
            <button className="work-button" onClick={setModuleCat}>Module 12</button>
            <button className="work-button" onClick={setModuleCat}>Module 13</button>
            <button className="work-button">Module 14 <Lock></Lock></button>
            <button className="work-button">Module 15 <Lock></Lock></button>
            <button className="work-button">Module 16 <Lock></Lock></button>
            <button className="work-button">Module 17 <Lock></Lock></button>
            <button className="work-button">Module 18 <Lock></Lock></button>
            <button className="work-button">Module 19 <Lock></Lock></button>
            <button className="work-button">Module 20 <Lock></Lock></button>
            </div>
            : module
            }
{/* 
            {module && moduleWork} */}
        </>
    )
}

export default Work;