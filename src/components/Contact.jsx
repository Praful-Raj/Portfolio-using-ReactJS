import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/_praful_raj_/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
          <a href="https://www.linkedin.com/in/praful-raj-0b201416b" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://twitter.com/PrafulR71903560" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/Praful-Raj" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:p9472947204@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
