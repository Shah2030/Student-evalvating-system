import React from 'react';
import './Cont.css';
import NavBar from './Navigation';

function Contact()
{
    return(
    <>
        <NavBar/>        
        <div class="fun" style={{fontSize: +30}}>
            <div class="container main">
                <h1>Get in Touch</h1>
                <p style={{textAlign:'center'}}>If you have any questions, feel free to reach out to us. We're here to help!</p>
                <div class="contact-form">
                    <form method="post">
                        <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}
export default Contact;