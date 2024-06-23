import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
function ContactUs() {
  return (
    <div className="ContactUs" id="contact">
      <section className="leftcontainer">
        <div className="leftRow">
          <h1>Contact Us</h1>
          <p>
            Feel free to get in touch with us we always open to discussing new
            projects. creative ideas or opportunities to be part of your vision
          </p>
        </div>
        <div className="leftRow">
          <a className="phone" href="tel:+919865149951">
            <FontAwesomeIcon icon={faPhone} />
            <div className="c1">+91-9865149951</div>
          </a>
          <a className="mail" href="mailto:info@lmsportal.co.in">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <div className="c1">info@lmsportal.co.in</div>
          </a>
          <a
            className="location"
            href="https://www.google.com/maps/place/102+Street+4657+Road"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="c1">102 Street 4657 Road</div>
          </a>
        </div>
        <div className="leftRow">
          <a
            className="facebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="twitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </section>
      <section className="rightcontainer">
        <div className="rightContainerBox">
          <h6>Contact Information</h6>
          <form>
            <div className="rows">
              <div className="inputgroup">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="inputgroup">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="rows">
              <div className="inputgroup">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Enter your email id"
                />
              </div>
              <div className="inputgroup">
                <label htmlFor="Companyname">Company Name</label>
                <input
                  type="text"
                  name="Companyname"
                  placeholder="Enter your Company name"
                />
              </div>
            </div>
            <div className="messagegroup">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your Company name"
              />
            </div>
            <div className="submit">
              <input type="submit" value="Submit" />
            </div>{" "}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;