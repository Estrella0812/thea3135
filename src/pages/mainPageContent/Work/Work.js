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
            <a href="https://twitter.com/bts_bighit/status/1664648069441286149" target="_blank">https://twitter.com/bts_bighit/status/1664648069441286149</a>
            <section className="work-written-section">
                <p className="work-subheader">Elements:</p>
                <p>HEOOJEW:ORWJE:RKJEWR:LKEJR:EKRJ:EJNER:Ojlfsjg;rjg;rjg;osjgroijrgoij
                    l;krgj;sgj;slkgj
                    s;lkrgj;lsrkgj;srogij;orsijs;oiijoegrgroigrnsrns;gn
                </p>
                <p className="work-subheader">Elements:</p>
                <p className="work-subheader">Elements:</p>
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