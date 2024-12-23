import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_90ru538', 'template_cpgopqc', form.current, {
        publicKey: 'wQT746QhCZe7mab4P',
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
    <>
      <section  id="Contact"className="h-auto pt-56 bg-gray-100 flex items-center flex-col">
        <p className="text-gray-600 text-[50px] pb-16">
          𝐂𝐎𝐍𝐓<span className="text-pink-400">𝐀𝐂𝐓</span>𝐒
        </p>
        <div className="h-[800px] w-[500px] bg-white shadow-xl shadow-pink-700 flex   justify-center flex-col ">
          <div className="font-semibold text-[35px] h-[300px] w-[500px] pl-14 bg-slate-800 text-white flex flex-col justify-center ">
            𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬 <p className="text-[14px]">Please fill in the form</p>
          </div>
          <form  ref={form} onSubmit={sendEmail} className="font-semibold   flex flex-col  ml-16">  
              <label className="pt-12 text-left">
                UserName:
              </label>
              
           <input
              type="text"
              placeholder="UserName"
              name="from_name"
              className="bg-gray-500 h-7 w-80 text-center"
            />
            <label htmlFor="" className="pt-6">
              Email
            </label>
            <input
              type="email" name="user_email"
              placeholder="Email"
              className="bg-gray-500 h-7 w-80 text-center"
            />
            <label htmlFor="" className="pt-6">
              Phone Number:
            </label>
            <input
              type='text'
              name='phone_no'
              placeholder="phoneNumber"
              className="bg-gray-500 h-7 w-80 text-center"
            />
            <label htmlFor="" className="pt-6">
              Address:
            </label>
            <input
              type="address"
              name='address_name'
              placeholder="Address"
              className="bg-gray-500 h-7 w-80 text-center"
            />
            <label htmlFor="" className="pt-6">
            Message
            </label>
            <textarea name="message"  placeholder="Messages"
              className="bg-gray-500 h-44 w-80 text-center"/>
              
           <div className=' pt-8 flex justify-center items-center text-white pb-9 pl-0'>
            <input type="submit" value="Send" className=' bg-black w-20' />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
