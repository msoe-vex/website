import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/ContactForm.scss';
import Alert from './Alert';
import ReCAPTCHA from "react-google-recaptcha";
import { Row, Col } from 'react-bootstrap';
// import { SocialMediaIconsReact } from 'social-media-icons-react';
import GoogleMap from './GoogleMap';
import ScrollAnimation from 'react-animate-on-scroll';
// import Footer from './Footer';

const ContactForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [verifiedAlert, setVerifiedAlert] = useState(false);
  const [nameEmailAlert, setNameEmailAlert] = useState(false);
  const [verified, setVerified] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!verified) {
      setVerifiedAlert(true);
    } else if (name === "" || email === "") {
      setNameEmailAlert(true);
    } else {
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

  if ((verifiedAlert || errorAlert || nameEmailAlert) && successAlert) {
    setErrorAlert(false);
    setVerifiedAlert(false);
    setNameEmailAlert(false);
  }
  
  const mapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`

	return (
    <div>
      <div className="ContactForm">    
        <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
          {successAlert ? 
              <Alert variant="success" message="Message Sent." handleClose={() => setSuccessAlert(false)} /> : null}
          {errorAlert ? 
          <Alert variant="danger" message="Message failed to send." handleClose={() => setErrorAlert(false)}/>: null}
          {nameEmailAlert ? 
          <Alert variant="danger" message="Please enter your name and email." handleClose={() => setNameEmailAlert(false)}/>: null}
          {verifiedAlert ? 
          <Alert variant="danger" message="Please verify that you're a human before submission." handleClose={() => setVerifiedAlert(false)}/>: null}
            <Row>
              <Col md={6}>
                <div className="Info">
                  <h1>Get in Touch!</h1>
                  <hr/>
                  <p>Raider Robotics is always looking for additional members to contribute to the success of the team. So if you are a MSOE student, we would be thrilled to have send us an email or come to any of our bi-weekly meetings because there are a plethora of ways for you to get involved and gain some of the industry-like experience that robotics has to offer.</p>
                  <GoogleMap
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `270px` }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: `15px` }} />}
                  />
                  {/* <div className="SocialMediaIcons">
                    <span className="SocialMediaIcon">
                      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="instagram" iconColor="rgba(245,238,238,1)" backgroundColor="rgba(78,77,77,1)" iconSize="4" roundness="20%" url="https://www.instagram.com/raider.robotics/" size="55" />
                    </span>
                    <span className="SocialMediaIcon">
                      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="twitter" iconColor="rgba(245,238,238,1)" backgroundColor="rgba(78,77,77,1)" iconSize="4" roundness="20%" url="/" size="55" />
                    </span>
                    <span className="SocialMediaIcon">
                      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="github" iconColor="rgba(245,238,238,1)" backgroundColor="rgba(78,77,77,1)" iconSize="4" roundness="20%" url="/" size="55" />
                    </span>
                  </div> */}
                  <div className="Split">
                    <hr />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="Form">
                  <form id="contact-form" onSubmit={handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address *</label>
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
                      size={width > 767 ? "normal" : "compact"}
                    />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                  </form>
                </div>
              </Col>
            </Row>  
          </ScrollAnimation>
        </div>
      {/* <Footer /> */}
    </div>
	);
}

export default ContactForm;