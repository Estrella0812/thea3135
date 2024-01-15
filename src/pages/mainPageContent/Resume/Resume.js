import {Download} from 'react-bootstrap-icons'
import './Resume.css'

function Resume(){
    return(
        <div className="resume-container">
            <h2 className="resume-header">Resume</h2>
            <a className="resume-download d-flex" href="resume.pdf" download="resume.pdf"><Download></Download><p>download</p></a>
        </div>
    )
}

export default Resume