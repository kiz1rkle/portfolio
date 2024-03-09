import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_SERVICE_ID;

export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-div">
        <h2>Contact Me:</h2>
        <form id="contactme" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="text" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
        
    </div>
  );
};