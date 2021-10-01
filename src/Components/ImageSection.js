import React from "react";
import about from "../img/about.jpg";

import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="me" />

        <div className="iconss">
        <a href="https://twitter.com/DSamdave" className="icon-holderr">
            <FontAwesomeIcon icon={faTwitter} className="a-iconn fbb" />
        </a>
        <a href="https://www.facebook.com/dsamdave/"    className="icon-holderr">
            <FontAwesomeIcon icon={faFacebook} className="a-iconn fbb" />
        </a>
        <a href="https://github.com/dsamdave" className="icon-holderr">
            <FontAwesomeIcon icon={faGithub} className="a-iconn ghh" />
        </a>
        <a href="https://www.linkedin.com/in/david-sampson/" className="icon-holderr">
            <FontAwesomeIcon icon={faLinkedin} className="a-iconn ytt"/>
        </a>
        </div>

      </div>
      <div className="about-info">
        <h4>
          I am<span> David Sampson</span>
        </h4>
        <p className="about-text">
          Let me tell you a few things...
          <p>
            I am a dedicated, organized and methodical individual. I am
            reliable, dependable and have an active, dynamic approach to work
            and getting things done.
          </p>
        </p>

        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Language</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: David Sampson</p>
            <p>: Nigeria</p>
            <p>: English</p>
            <p>: Port Harcourt, Nigeria</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1NmoSzSe28Jc_-Ic9v-ojyNRsBSnSghf_/view?usp=sharing"
          className="btn"
        >
          Download Cv
        </a>
      </div>
      
    </div>
  );
}

export default ImageSection;
