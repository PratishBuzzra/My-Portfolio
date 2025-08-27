import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = ({mode}) => {
    const form = useRef();
     const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8pxouw9', 'template_o3mf2hr', form.current, 'zMSOvvEfWKG5hLmvm')
            .then(() => {
                alert("message sent successfully");
                e.target.reset();
            }, (error) => {
                alert(error.text);
            });
    };
  return (
    <div className='pt-16 pb-16 px-4' id='contact'>
        <h1 className='text-xl sm:text-2xl font-bold text-center mb-8'>Contact Me</h1>
      <div className='max-w-2xl mx-auto border-2 p-6 sm:p-8 rounded shadow-2xl'>
        <form ref={form} className='space-y-6' onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Name' className={`w-full p-3 border rounded-md ${mode ? 'placeholder-[#1A1A1A]' : 'placeholder-[#f6d4b1]'}`} required/>
             <input type="email" name="email" placeholder='Your email'className={`w-full p-3 border rounded-md ${mode ? 'placeholder-[#1A1A1A]' : 'placeholder-[#f6d4b1]'}`} required/>
              <textarea name="message" rows='5' placeholder='Your Message' className={`w-full p-3 border rounded-md ${mode ? 'placeholder-[#1A1A1A]' : 'placeholder-[#f6d4b1]'}`} required></textarea>
              <button type='submit' value="Send" className={`border-2 px-4 py-2 rounded font-semibold text-lg ${mode ? 'hover:bg-[#1A1A1A] hover:text-[#f6d4b1]' : 'hover:bg-[#f6d4b1] hover:text-[#1A1A1A]'} transition delay-150 duration-300 ease-in-out w-full`}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
