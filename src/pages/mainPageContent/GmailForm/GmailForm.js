import './GmailForm.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {X} from 'react-bootstrap-icons'

function GmailForm(){
  const form = useRef();
  const [successful, setSuccess] = useState(false);

  const sendEmail = (e) => 
  {
    console.log(form.current  )

    e.preventDefault();

    emailjs.sendForm('service_3fqiy9k', 'template_r2rsfdp', form.current, 'IDl5WMoHJTeKBsA0R')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const messageState = [
    <h5 className="gmail-state" >email sent successfully!<span style={{paddingLeft: "1.5vw"}}><X size={30} className="gmail-close-icon" onClick={() => setSuccess(!successful)}></X></span></h5>
  ]


    return(
      <div className="gmail-container">
        <h2 className="gmail-header">write me!</h2>
        {successful && messageState}
        <form className="gmail-form" ref={form} onSubmit={sendEmail}>
          <label className="gmail-label">Email</label>
          <input type="email" name="email" className="gmail-input"></input>
          <label className="gmail-label">Subject</label>
          <input type="text" name="subject" className="gmail-input"></input>
          <label className="gmail-label">Message</label>
          <textarea type="text" name="message" className="gmail-input"></textarea>
          <input type="submit" name="email" className="gmail-button"></input>
        </form>
      </div>
    )
}

export default GmailForm;