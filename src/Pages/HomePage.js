import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> David Sampson</span>
                </h1>
                <p className="h-sub-text">
                     A Fullstack Developer, Coding Instructor,  Graphics & UI/UX Designer
                    <p>
                         Welcome to my page, it's my pleasure having you here!
                    </p> 
                </p>
                <div className="icons">
                    <a href="https://twitter.com/DSamdave" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon fb" />
                    </a>
                    <a href="https://www.facebook.com/dsamdave/" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/dsamdave" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-sampson/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </a>
                   
                </div>
                
            </header>
        </div>
    )
}

export default HomePage;
