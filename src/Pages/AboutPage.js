import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/web.png';
import intelligence from '../img/mobile.png';
import gamedev from '../img/training.png';



function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML 5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS 3'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'TypeScript'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Next Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Bootstrap & Sass'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design & Development'} 
                text={'I design professional website UI designs and also develop & build responsive websites.'}
                />
                    
                <ServicesSection image={intelligence} title={'Mobile App Design & Development'} 
                text={'I design beautiful mobile apps and code with React Native or Flutter.'}
                />
                <ServicesSection image={gamedev} title={'Coding Classes'} 
                text={'Using the provided structured curriculum, teaching plaform, I deliver structured website development classes.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
