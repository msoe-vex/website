import React, { useState } from 'react';
import axios from 'axios';
import '../style/ContactForm.scss';
import Alert from './Alert';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [verifiedAlert, setVerifiedAlert] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleSubmit = e => {
    if (verified) {
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then((response)=>{
      if (response.data.status === 'success'){
        resetForm();
        setSuccessAlert(true);
      }else if(response.data.status === 'fail'){
        setErrorAlert(true);
      }
    })
    } else {
      setVerifiedAlert(true);
    }
  }

  const resetForm = () => {
     setEmail('');
     setName('');
     setMessage('');
  }

  const onNameChange = event => {
    setName(event.target.value);
  }
  
  const onEmailChange = event => {
    setEmail(event.target.value);
  }
  
  const onMessageChange = event => {
    setMessage(event.target.value);
  }
  
	return(
  	<div className="ContactForm">
      {successAlert ? 
          <Alert variant="success" message="Message Sent." handleClose={() => setSuccessAlert(false)} /> : null}
      {errorAlert ? 
      <Alert variant="danger" message="Message failed to send." handleClose={() => setErrorAlert(false)}/>: null}
      {verifiedAlert ? 
      <Alert variant="danger" message="Please verify that you're a human before submission." handleClose={() => setErrorAlert(false)}/>: null}
      <form id="contact-form" onSubmit={handleSubmit.bind(this)} method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={onNameChange.bind(this)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={onEmailChange.bind(this)} />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={message} onChange={onMessageChange.bind(this)} />
        </div>
        <div className="ReCAPTCHA">
        <ReCAPTCHA
          sitekey="6Lf1wr8ZAAAAAKgAhdyyUWjwqvw2-WQAaV2EiGUS"
          onChange={() => setVerified(true)}
        />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
  	</div>
	);
}

export default ContactForm;