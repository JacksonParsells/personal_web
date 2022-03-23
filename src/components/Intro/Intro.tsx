import React from 'react';
import Headshot from '../../shared/images/headshot.png';
import SocialsData from '../../shared/data/SocialsData';
import './Intro.scss';

const Intro: React.FunctionComponent = () => {
    return (
        <div id="intro">
            <div className="intro-content">
                <img src={Headshot} alt="Jackson Parsells headshot" />
                <h1>Jackson Parsells</h1>
                {/* show social links below */}
                <div className="socials">
                    {SocialsData.map((social, index) => (
                        <div key={index} className="social">
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Intro;