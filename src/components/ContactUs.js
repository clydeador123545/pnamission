import './styles/contact.css'
import { useState, useCallback } from 'react';
import emailLogo from '../images/email.png';
import phoneLogo from '../images/phone.png';


const ContactUs =() =>{
    const [namePosition, setNamePosition] = useState({top:'51%', transform:'translate(-50%, -50%)', left:'60px', fontSize:'16px'});
    const [emailPosition, setEmailPosition] = useState({top:'51%', transform:'translate(-50%, -50%)', left:'60px', fontSize:'16px'});

    const labelHandlePosition = useCallback((input) => {
        if (input === 'name') {
            setNamePosition({ top: '0px' });
        } else if (input === 'email') {
            setEmailPosition({ top: '0px' });
        }
    }, []); // Empty array means this function won't be recreated unless necessary

    const handleLabelBlur = useCallback(() => {
        const nameValue = document.getElementById("yourName").value;
        const emailValue = document.getElementById("yourEmail").value;

        if (nameValue === "" && emailValue === "") {
            setNamePosition({ top: '51%' });
            setEmailPosition({ top: '51%' });
        }
    }, []);


    return(
        <div className='contact-container'>
            <div className='background-img'
                style={{
                    backgroundImage: "url('https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/461939781_122140439456318427_3252228636773585824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHNUYHAT5PXELrSYOjS0PGPvGBDjBJg3A-8YEOMEmDcD2m-5JTDv3d7yUm6Xuno4i2E6VHMqTx3Ax14JQGX9vTc&_nc_ohc=sfK4FHvfPJ4Q7kNvgHl1UTj&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=ANqaaWeQWQ2d8BK04Gj3EVo&oh=00_AYCF8MZhf9pqTFMT37tzie6BiBPM3_ufTbXsUqbOgr-dCg&oe=672037BC')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className='container-input'
                style={{
                    backdropFilter: "blur(10px) opacity(1)",
                    webkitBackdropFilter: "blur(10px) opacity(1)",
                }}
            >
                
                <div className='title-container'>
                    <h1>Get in Touch with us</h1>
                    <p>Feel free to drop us a message.</p>
                </div>
                

                <form className='form-container'>
                    <div className='yourname-container'>
                        <label htmlFor="yourName"
                            style={{
                                top: namePosition.top
                            }}
                        >Your Name</label>
                        <input 
                            id='yourName' 
                            name="yourName"
                            onFocus={() => {labelHandlePosition('name')}}
                            onBlur={handleLabelBlur}
                        />
                    </div>
                    <div className='youremail-container'>
                        <label htmlFor='yourEmail'
                            style={{
                                top: emailPosition.top
                            }}
                        >Your Email</label>
                        <input 
                            id='yourEmail' 
                            name='yourEmail'
                            onFocus={() => {labelHandlePosition('email')}}
                            onBlur={handleLabelBlur}
                        />
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
                            <img style={{
                                    filter: 'invert(1000%)',
                                }} src='https://cdn-icons-png.flaticon.com/512/535/535239.png'>

                            </img>
                            <p>
                                Phase 3, Payatas B, Quezon City, 1119 Metro Manila
                            </p>
                        </div>

                        <div className='email'>
                            <img style={{
                                    filter: 'invert(1000%)',
                                }}src={emailLogo}>
                            </img>
                            <p>
                                pnapayatas@example.com
                            </p>
                        </div>

                        <div className='phone-number'>
                            <img
                                style={{
                                    filter: 'invert(1000%)',
                                }}

                                src={phoneLogo}
                            ></img>
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