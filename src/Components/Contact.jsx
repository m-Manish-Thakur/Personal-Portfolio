import React from 'react'
import  './Style.css';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

  const [state, handleSubmit] = useForm("mjvqklqv");
  if (state.succeeded) {
      return  <>
                  <div id='afterSubmit'>
                    {/* <img src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif" /> */}
                    <img src="https://cdn.dribbble.com/users/2121936/screenshots/4814257/ezgif-1-64fc188f39.gif" alt="" />
                    <h1>Thanks you!</h1>
                    <p>Your Submission has been sent.</p>
                  </div>
              </>
  }


  return (
    <>
        <div id="contact">

                <div className='cont_con'>
                      <div className="item1">
                          <p>- LET'S CONNECT</p>
                          <h2>Get In Touch</h2>
                          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>

                          <div style={{display:'flex', justifyContent:'space-around', width:'100%', marginTop:'50px'}}>

                            <div style={{textAlign:'center'}}>
                              <a href="https://www.linkedin.com/in/manish-thakur-%F0%9F%87%AE%F0%9F%87%B3-9a6877235/" target='_blank'><img src="Images/linkedin.png" style={{height:'55px'}}/></a>
                              <p style={{marginTop:'0px',lineHeight:'20px'}}>LinkedIn</p>
                            </div>

                            <div style={{textAlign:'center'}}>
                              <a href="mailto: manishthakur231690@gmail.com" target='_blank'><img src="Images/email.jpg" style={{height:'55px'}}/></a>
                              <p style={{marginTop:'0px',lineHeight:'20px'}}>Mail</p>
                            </div>

                            <div style={{textAlign:'center'}}>
                              <a href="https://github.com/Manishthakur231690" target='_blank'><img src="Images/github.png" style={{height:'55px'}}/></a>
                              <p style={{marginTop:'0px',lineHeight:'20px'}}>GitHub</p>
                            </div>
                            
                          </div>
                      
                      </div>
                
                      <form onSubmit={handleSubmit}>
                        <input type="text" id='name' name='Name' placeholder='Your Name..' required/><br />
                        <ValidationError prefix="Name" field="name" errors={state.errors}/>

                        <input type="email" id='email' name='Email' placeholder='Your Email..' required/>
                        <ValidationError prefix="Email" field="Email" errors={state.errors}/>

                        <textarea cols="30" rows="5" id='message' name='Message' placeholder='Your Message..' required></textarea><br />
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>

                        <button type='submit' disabled={state.submitting}>Submit</button>
                      </form>

                </div>
                <br /><br /><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112827.72286369215!2d78.00627679748064!3d27.906074742391148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1685331982015!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
        </div>
    </>
  )
}

export default Contact
