import './pageCss/contact.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import emailjs from  '@emailjs/browser';
import cam from './mockups/cam.png';
import Footer from '../components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset any existing error messages
    setEmailError('');
    setNameError('');
    setMessageError('');

    // Validate fields
    if (name.trim() === '') {
      setNameError('Name is required');
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
    }
    if (message.trim() === '') {
      setMessageError('Message is required');
    }

    // Only proceed with form submission if all fields are valid
    if ( (name.trim() !== '') || (email.trim() !=='') || (message.trim() !== '')) {
      // EmailJS configuration
      const serviceID = 'service_o18m4mf';
      const templateID = 'template_k72dlgb';
      const userID = 'LLi4EjWbgrbMI_b5g';

      // Prepare the email data
      const emailData = {
        from_name: name,
        from_email: email,
        message: message,
      };

      // Send the email using EmailJS
      emailjs.send(serviceID, templateID, emailData, userID)
        .then((response) => {
          console.log('Email sent successfully!', response);
          // Perform any success actions (e.g., show a success message, redirect, etc.)
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Perform any error handling (e.g., show an error message, log the error, etc.)
        });

      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <body>
      <Navbar />
      <div>
        <div className="section1">
          <h1 className="T4">LET'S TALK!</h1>
          <text className="t2">
            IF YOU HAVE INQUIRIES OR QUESTIONS YOU CAN JUST SEND ME AN EMAIL AND I WILL REPLY ASAP. EVEN IF YOU HAVE A JOB OFFER, YOU CAN CONTACT ME.
          </text>
          <img src={cam} className="cam" alt="cam" />
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="message" className="message">
              MESSAGE
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <p className="error">{messageError}</p>}
          </div>
          <button type="submit">SEND</button>
        </form>
        <Footer />
      </div>
    </body>
  );
}
