import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_5bpt45g', e.target, 'user_eNc3dbZZTdXdmsCa4LX5Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div className='h-screen flex items-center mt-10 md:mt-24  mb-20' id='contact'>
            <div className=' bg-green-400 bg-opacity-25 rounded-xl py-16 w-4/5 md:w-3/5 mx-auto'>
                <h2 className='text-center text-3xl font-semibold'>Contact Form</h2>
                <form className='text-center mt-6' onSubmit={sendEmail}>

                    <input type="text" name="name" placeholder="Your Name" className='py-2 px-4 mx-auto shadow-xl border border-gray-200 rounded w-4/5 md:w-3/5' required></input>

                    <input type="email" name="user_email" placeholder="Your Email" className='py-2 px-4 my-4 mx-auto shadow-xl border border-gray-200 rounded w-4/5 md:w-3/5' required></input>

                    <textarea name="message" row="3" placeholder="Your message please..." className='py-2 px-4 mx-auto shadow-xl border border-gray-200 rounded w-4/5 md:w-3/5'></textarea>

                    <input type="submit" value="Send" className='py-2 px-4 mt-2 mx-auto border border-gray-200 rounded w-4/5 md:w-3/5 text-xl font-semibold bg-green-400 hover:bg-green-600 hover:border-white hover:text-white'/>
                </form>
            </div>
        </div>
    );
};

export default Contact;