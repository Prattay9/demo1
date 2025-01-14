import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image6 from '../images/form pic.jpeg'
import './Contact.css';
import Whatsapp from '../components/Whatsapp.';
import { useState } from 'react';
import { toast } from "react-toastify";


const Contact = () => {
  const [ user, setUser ] = useState({
    email: "",
    message:"",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
    console.log(user);
    const response = await fetch(`http://localhost:5000/api/form/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),

    })
    .then((response)=>{
      console.log(response);
      if (response.status==200) {
        toast.success("User Registered Successfully! We will contact you soon.");
      }
    })
    
  };
  const sendEmail = async () => {
    const res = await fetch(`http://localhost:5000/api/msg/msgmail`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
      });
  };
  
  return (
    <>
      <Navbar />
      <Whatsapp/>
      <div className='contact'>        
        <div className="con-right">
          <div className="con-content">
            <h3>GET IN TOUCH</h3><hr /><br />
            <h1>Contact Us</h1>
            <p>Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
            <div className="info1"  style={{ display:'flex', gap:'1vw'}}>
              <i className="ri-phone-fill"></i>
              <p>+91 86172 59790</p>              
            </div>
            <div className="info1" style={{ display:'flex', gap:'1vw'}}>
              <i className="ri-mail-line"></i>
              <p>mailtilak321@rediffmail.com</p>  
           </div>            
          </div>
        </div><hr />
        
        <div className="con-left">
        <div className="con-form">
              <form className="my-con-form" onSubmit={handleSubmit}>
                <img className='con-image' src={Image6} alt="" />
                <div className="con-1">
                  <h3>Request for Enquiry</h3>                 

                  <div className="con-field">
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                    />
                    <label>Your Email Id</label>
                  </div>
                  

                  <div className="con-field">
                    <textarea
                      name="message"
                      id="message"
                      required
                      autoComplete='off'
                      value={user.message}
                      onChange={handleInput}
                    />
                    <label>Your Message</label>
                    </div>

                  <button id='mail-btn' className="con-btn" type='submit'>Submit</button>
                </div>
              </form>
           </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;