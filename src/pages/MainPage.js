import { useEffect, useState } from "react"
import {Lock, Download} from 'react-bootstrap-icons'

import CalendarSection from './mainPageContent/Calenar/CalendarSection'
import Announcement from './mainPageContent/Announcement/Announcement'
import GmailForm from './mainPageContent/GmailForm/GmailForm'
import LoginSection from './mainPageContent/Login/LoginSection'
import Resume from './mainPageContent/Resume/Resume'
import Work from './mainPageContent/Work/Work'
import Github from './mainPageContent/Github/Github'


import './MainPage.css'

const homePage = [
    <>
        <div className="container d-flex justify-content-center" style={{marginBottom: "10%"}}><CalendarSection></CalendarSection></div>
        <div className="container d-flex justify-content-center" style={{marginBottom: "10%"}}><Resume></Resume></div>
        <div className="container d-flex justify-content-center"><GmailForm></GmailForm></div>
    </>
]

const beIncludedPage = [
    <>
     <h2 className="google-header" style={{marginTop: "18vh"}}>tell us what you think!</h2><div className="container d-flex justify-content-center" style={{marginBottom: "10%"}}><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdPnPoStWW8y0ylrz0ld13EeX6g57twvDSN-mNAz99NulOfNw/viewform?embedded=true" width="350" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>
     <h2 className="google-header">share your work!</h2><div className="container d-flex justify-content-center">
        <iframe style={{backgroundColor: "white", borderRadius: "6px"}} src="https://drive.google.com/embeddedfolderview?id=1WCoRPrl5g-sspHDYybrxle7sjxWiGiVE#list" width="350" height="500" frameborder="0"></iframe>
     </div>
     <div className="google-Drive container d-flex justify-content-center">
            <a href="https://drive.google.com/drive/folders/1WCoRPrl5g-sspHDYybrxle7sjxWiGiVE?usp=sharing" target="_blank">Google Drive</a>
    </div>
    </>
]

const teamPage = [
    <div className="container d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
        <LoginSection></LoginSection>
    </div>
]

const workPage = [
    <div className="container d-flex justify-content-center"><Work></Work></div>
]

function MainPage(){
    const [offsetY, setOffsetY] = useState(0);
    const [content, setContent] = useState(homePage);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return()=> window.removeEventListener("scroll", handleScroll);
    }, []);


    const setCategory = (e) => {
        if(e.target.innerText === "HOME"){
            setContent(homePage);
        }else if(e.target.innerText === "Work"){
            setContent(workPage);
        }else if(e.target.innerText === "Team"){
            setContent(teamPage);
        }else if(e.target.innerText === "Be Included"){
            setContent(beIncludedPage);
        }
    };

    // const setCategory = (content) => {
    //     if(content === "HOME"){
    //         setContent(homePage);
    //     }else if(content === "Work"){
    //         setContent();
    //     }else if(content === "Team"){
    //         setContent();
    //     }else if(content === "Be Included"){
    //         setContent(beIncludedPage);
    //     }
    // };

    
    return(
        <div className="body-container">
            <div className="announcement-container"><Announcement></Announcement></div>
            <section className="parallax">
                <div className="parallax-background"  style={{transform: `translateY(${offsetY*0.5}px)`, zIndex: '-2'}}></div>
                <div className="parallax-text" style={{transform: `translateY(${offsetY*0.2}px)`, zIndex: '-3'}}></div>
            </section>
     

            <div className = "main-component-container">
                <div className="navigationBar">
                    <button onClick={setCategory}>HOME</button>
                    <button onClick={setCategory}>Work</button>
                    <button onClick={setCategory}>Team<Lock style={{marginLeft: "2%", color: "#F0ECE5"}}></Lock></button>
                    <button onClick={setCategory}>Be Included</button>
                </div>

                {content}
                {/* <Github/> */}
                {/* {homePage}
                {beIncludedPage} */}
            </div>

            <div className="botnav">
                <p>estrellakim03@gmail.com</p>
            </div>
        </div>
    )
}

export default MainPage;