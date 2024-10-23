import './styles/contact.css'
import { useState } from 'react';


const ContactUs =() =>{
    const [labelPosition, setLabelPosition] = useState({});

    return(
        <div className='contact-container'>
            <div className='container-input'>
                <div className='title-container'>
                    <h1>Get in Touch with us</h1>
                    <p>Feel free to drop us a message.</p>
                </div>
                

                <form className='form-container'>
                    <div className='yourname-container'>
                        <label htmlFor="yourName">Your Name</label>
                        <input id='yourName' name="yourName"/>
                    </div>
                    <div className='youremail-container'>
                        <label htmlFor='yourEmail'>Your Email</label>
                        <input id='yourEmail' name='yourEmail'/>
                    </div>
                    <div className='message-container'>
                        {/* <label htmlFor="message" className='message'>Type your message here...</label> */}
                        <textarea id='message' name='message' placeholder='Type your message here...'></textarea>
                    </div>

                    <button type='submit' className='send-button'>Send</button>
                </form>

                <div className='side-container'>
                    
                    <div className='informations'>
                        <h1>Contact us</h1>

                        <div className='location'>
                            <img></img>
                            <p>
                                Phase 3, Payatas B, Quezon City, 1119 Metro Manila
                            </p>
                        </div>

                        <div className='email'>
                            <img></img>
                            <p>
                                pnapayatas@example.com
                            </p>
                        </div>

                        <div className='phone-number'>
                            <img></img>
                            <p>
                                +6394 5127 2651
                            </p>
                        </div>

                        <div>

                        </div>


                    </div>
                </div>
            </div>

            
        </div>

    );
}

export default ContactUs;