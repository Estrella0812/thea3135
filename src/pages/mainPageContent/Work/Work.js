import {Lock, Download, Link, FiletypePdf} from 'react-bootstrap-icons'
import { useEffect, useState } from "react"
import './Work.css'

import module12IMG from './img/bangbangcon.jpg'
import module15IMG1 from './img/original_image.png'
import module15IMG2 from './img/photoshoped_image.jpg'
import module16IMG1 from './img/module16_original.jpg'
import module16IMG2 from './img/module16_mine.jpg'
import module16IMG3 from './img/module16_AI.jpg'
import module17IMG from './img/module17.png'

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
        if(e.target.innerText==="Module 15"){
            setModule([
                <div className="work-container">
                <h2 className="imageHeader">Original Image</h2>
                <img className="module-img" src={module15IMG1} style={{width: "100%"}}/>
                <a href=" https://www.youtube.com/watch?app=desktop&v=OFrgwlbcZ1w" target="_blank" style={{marginBottom: "10vh"}}>original image by Billboard</a>
                <h2 className="imageHeader">Photoshopped Image</h2>
                <img className="module-img" src={module15IMG2} style={{width: "100%"}}/>
                <button className="work-button" onClick={setModuleCat}>back</button>
                </div>
            ])
        }
        if(e.target.innerText==="Module 16"){
            setModule([
            <div className="work-container">
            <h2 className="imageHeader">Original Image</h2>
            <img className="module-img" src={module16IMG1}/>
            <section className="work-written-section">
                <div className="textSection">
                    <p className="work-subheader">Comparison</p>
                    <p>
                        The two image each has one personality of the original image. One focuses on the umbrella and the overal mood, while the other one, focuses
                        on the yong girl's facial expression. I think the image generated using my description is closest to the original
                        photo. This is because I beleive the main theme of the original photo is the light umbrella emitting positive mood in contrast to the dark
                        surrounding. This emotion is expressed in the image generated by my description as it's clear that the umbrella and the dark surrounding is nearly
                        identical to the original image. However, on the AI description generated image, it only focuses on the girl itself with no outstanding mood. Just by reading
                        the AI description, it is clear that the AI focused on the girl itself rather than her surrouding and the overall mood that the image gives. This proves how AI
                        are not advanced as much to the point where it is able to grasp the overall theme or the concept of a given image/situation.<br></br><br></br>
                    </p>
                </div>
            </section>
            <h2 className="imageHeader">My description generated image</h2>
            <img className="module-img" src={module16IMG2}/>
            <section className="work-written-section">
                <div className="textSection">
                    <p className="work-subheader">My Description</p>
                    <p>
                    The image has a young girl standing in the rain dark at night, holding onto an umbrella. In contrast to the dark surrounding, the inside of the umbrella is
                    bright, emitting light with a bright clear sky. The inner umbrlla has a design of light blue sky with clouds. There is an actual white cloud right in front of the girl
                    inside the umbrella. It is clear that the umbrella has been manipulated. I beleive that the bright sky with white clouds has been cropped in to the umbrella.
                    Bright light effect has also been layered above the inner side of the umbrella, but under the outerside. A realistic cloud has been copy pasted to the image, while carefully
                    adjusting the light so that it does not seem too off from the overall mood of the image. I also beleive that the brightness of the background has been lowered to emphasize the girl
                    and her umbrella.<br></br><br></br>
                    </p>
                </div>
            </section>
            <h2 className="imageHeader">AI description generated image</h2>
            <img className="module-img" src={module16IMG3}/>
            <section className="work-written-section">
                <div className="textSection">
                    <p className="work-subheader">AI Description</p>
                    <p>
                        In the rain, a young girl confidently holds a black umbrella, gazing up at the sky. Her determined expression reflects 
                        strength amidst the storm. A blue flower in her hair adds a pop of color against the dreary backdrop. Dressed in a simple 
                        yet stylish outfit, she grips the umbrella firmly, symbolizing resilience. With a serene atmosphere and focused gaze, the 
                        image captures her vulnerability and strength, emphasizing themes of determination and finding beauty in adversity.<br></br>
                    </p>
                </div>
            </section>
            <button className="work-button" onClick={setModuleCat}>back</button>
            </div>
            ]);
        }
        if(e.target.innerText==="Module 17"){
            setModule([
                <div className="work-container">
                    <h2 className="imageHeader" style={{marginTop: "10vh"}}>Lost Pet Flyer</h2>
                    <img className="module-img" src={module17IMG} style={{width: "500px", marginBottom: "10vh"}}/>
                    <button className="work-button" onClick={setModuleCat}>back</button>
                </div>
            ])
        }
        if(e.target.innerText==="Program Project"){
            setModule([
                <div className="work-container">
                    <div className="work-cont-container" style={{minHeight: "60vh", marginTop: "5vh"}}>
                        <h2 className="resume-header">Program Project pdf</h2>
                        <section className="work-written-section">
                            <a className="resume-download d-flex" href={process.env.PUBLIC_URL + "/Program Project.pdf"} target="_blank" style={{minWidth: "180px", marginTop: "30px", marginBottom: "10vh"}}><FiletypePdf></FiletypePdf><p>Open</p></a>
                        </section>
                        <h2 className="resume-header">Link</h2>
                        <section className="work-written-section">
                            <a className="resume-download d-flex" href="https://www.canva.com/design/DAF_z_8jf-w/Na2a01zAm0ahDJCsOdXo6Q/edit?utm_content=DAF_z_8jf-w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" style={{minWidth: "180px"}}><Link></Link><p>Visit Canva</p></a>
                        </section>
                    </div>
                    <button className="work-button" onClick={setModuleCat}>back</button>
                </div>
            ])
        }if(e.target.innerText==="Module 19"){
            setModule([
                <div className="work-container">
                <iframe src="https://www.youtube.com/embed/tShavGuo0_E" style={{minWidth: "900px", minHeight: "500px", marginTop: "10vh"}}></iframe>
                <section className="work-written-section">
                <div className="textSection">
                    <p className="work-subheader">Content</p>
                    <p>
                    The presentation is about fear of public speaking and how one should gain confidence. It is done effectively as she goes 
                    straight to the point while grabbing the viewer’s attention by providing a relatable situation. The presentation teaches 
                    (gives advice) on how to not be freaked out when one encounters a situation of having to speak in public.<br></br>
                    </p>
                    <p className="work-subheader">Timing/Pacing</p>
                    <p>
                    The speaker does maintain a rhythm and structure throughout the presentation, especially when making an important point. 
                    She changes her tone and loudness to emphasise the importance of certain information. This supports the delivery of the content 
                    as it grabs the attention on the important parts. She also pauses a bit when moving on to the next topic allowing the 
                    audience to recap and remember what she said before. Hence, the presentation is not rushed; yet, it is not slowed to bore 
                    the audience.</p>
                    <p className="work-subheader">Style</p>
                    <p>
                    I think the style of the presentation is semi-formal or casual. It is light-heated for sure as her tone goes up and down, 
                    being loud at times. The presentation is done with graphical drawings while adding some text on important points she wishes 
                    to catch the attention. This allows the audience to better understand as it adds visualisation to the information she is 
                    trying to explain.<br></br>
                    </p>
                    <p className="work-subheader">Visuals</p>
                    <p>
                    Visuals are easy to read as the presentation is not overloaded with images and text. She uses bare text which allows
                    the audience to catch on to the key points. All of her animation-like images are carefully chosen as it goes along with 
                    the things she is saying. These visuals effectively support the content as it is used in the right timing with the right 
                    content.<br></br>
                    </p>
                    <p className="work-subheader">Technical</p>
                    <p>
                    The presentation was greatly done. The images that work like stop motion to give an animated feeling, brief text added 
                    to give the audience key points, and clean audio improves the quality of the video and make it professional. The video 
                    is not too long to bore the audience but not too short to be lacking information. The style of the presentation, and the 
                    graphics, was consistent throughout the entire video without any issues. The presentation support for any devices such as
                    computer, phone, and tablet and would remain consistent and legible.<br></br>
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

    const workButtons = [
        <div className="Work-button-container">
            <button className="work-button" onClick={setModuleCat}>Program Project</button>
            <button className="work-button" onClick={setModuleCat}>Module 12</button>
            <button className="work-button" onClick={setModuleCat}>Module 14 </button>
            <button className="work-button" onClick={setModuleCat}>Module 15</button>
            <button className="work-button" onClick={setModuleCat}>Module 16</button>
            <button className="work-button" onClick={setModuleCat}>Module 17</button>
            <button className="work-button" onClick={setModuleCat}>Module 19</button>
        </div>
    ]


    console.log(module.length);
    return(
        <>
            {module.length===0 ?
            <div className="Work-button-container">
            <button className="work-button" onClick={setModuleCat}>Program Project</button>
            <button className="work-button" onClick={setModuleCat}>Module 12</button>
            <button className="work-button" onClick={setModuleCat}>Module 14</button>
            <button className="work-button" onClick={setModuleCat}>Module 15</button>
            <button className="work-button" onClick={setModuleCat}>Module 16</button>
            <button className="work-button" onClick={setModuleCat}>Module 17</button>
            <button className="work-button" onClick={setModuleCat}>Module 19</button>
            </div>
            : module
            }
        </>
    )
}

export default Work;