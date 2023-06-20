import './pageCss/contact.css';
import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import img from './mockups/HomeBack4.jpg';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      };
    return (
        <body>
        <div>
            <Navbar/>
        <form onSubmit={handleSubmit} className="contact-form">
        <h1>Contact Me</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className='message'>Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </body>
    );
}
