import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
            
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427913.95789107366!2d7.014822641713416!3d4.836512712379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1633097672140!5m2!1sen!2sng" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Location"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+234 8188251329'} text2={'+234 7046026964'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'davidsampson.ud@gmail.com'} text2={'virtualsavvy.nigeria@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'#2 Omumm Road Rumuekini, '} text2={'Port Harcourt, Nigeria.'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
