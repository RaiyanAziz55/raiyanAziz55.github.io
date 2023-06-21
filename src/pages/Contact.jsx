import './pageCss/contact.css';
import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser';
import cam from "./mockups/cam.png";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // EmailJS configuration
        const serviceID = 'service_o18m4mf'; // Replace with your Service ID from EmailJS
        const templateID = 'template_k72dlgb'; // Replace with your Template ID from EmailJS
        const userID = 'LLi4EjWbgrbMI_b5g'; // Replace with your User ID from EmailJS
      
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
      };

    return (
        <body>
            <Navbar/>
        <div>
        <div className='section1'>
        <h1 className='T4'>LET'S TALK!</h1>
        <text className='t2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea eius velit sint aliquam laudantium quas expedita. Magnam molestiae labore sapiente non repudiandae vero iste earum quae alias iusto? Consequatur corrupti sapiente magni quod et!</text>
        <img src={cam} className="cam" alt="cam"/>
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
          </div>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className='message'>MESSAGE</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">SEND</button>
        </form>
      </div>
      </body>
    );
}
