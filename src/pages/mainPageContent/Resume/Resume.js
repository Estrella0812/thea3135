import {Download} from 'react-bootstrap-icons'
import './Resume.css'

function Resume(){
    return(
        <div className="resume-container">
            <h2 className="resume-header">Resume</h2>
            <a className="resume-download d-flex" href="HanbyulKim_Resume.pdf" download="HanbyulKim_Resume.pdf"><Download></Download><p>download</p></a>
        </div>
    )
}

export default Resume