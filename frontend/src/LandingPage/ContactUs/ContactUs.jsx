import React from 'react'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function ContactUs() {
  return (
    <div className='ContactUs' id='contact'>
        <section className='leftcontainer'>
            <h1>Contact Us</h1>
            <p>Feel free to get in touch with us we always open to discussing new projects. creative ideas or opportunities to be part of your vision</p>
            <div className='phone'>
                <h6><FontAwesomeIcon icon={faPhone} /> 9865149951</h6>
            </div>
            <div className='mail'>
                <h6><FontAwesomeIcon icon={faEnvelope} /> info@lmsportal.co.in</h6>
            </div>
        </section>
        <section className='rightcontainer'>
            <form>
                <div className='rows'>
                    <div className='inputgroup'>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name='firstname' placeholder='Enter your first name'/>
                    </div>
                    <div className='inputgroup'>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name='lastname' placeholder='Enter your last name'/>
                    </div>
                </div>
                <div className='rows'>
                    <div className='inputgroup'>
                        <label htmlFor="Email">Email</label>
                        <input type="text" name='Email' placeholder='Enter your email id'/>
                    </div>
                    <div className='inputgroup'>
                        <label htmlFor="Companyname">Company Name</label>
                        <input type="text" name='Companyname' placeholder='Enter your Company name'/>
                    </div>
                </div>
                <div className='messagegroup'>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name='message' placeholder='Enter your Company name'/>
                </div>
                <input type="submit" className='submit' value="submit"/>
            </form>
        </section>
    </div>
  )
}

export default ContactUs