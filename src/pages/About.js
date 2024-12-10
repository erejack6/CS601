import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.topSection}>
                <img
                    src="/unnamed.jpg"
                    alt="Emily's face"
                    className={styles.profilePicture}
                />
                <div className={styles.textContainer}>
                    <h1>Hello! I am Emily Rejack</h1>
                    <p>
                        Hello from Austin, Texas! My name is Emily, and I work as a product designer 
                        at Dell. My journey began with a degree in Industrial Engineering, leading to 
                        my first role at Dell as an IT Product Manager. During my first year, I attended 
                        a company-sponsored Product Design Academy, which solidified my passion for design. 
                        My industrial engineering background complements the analytical aspects of design, 
                        though I wanted to gain more technical skills. This inspired me to join the MSSD 
                        program at BU.
                    </p>
                    <p>
                        Outside of work, I’m an adventurer at heart, always curious to explore the world. 
                        I love traveling, attending concerts, and enjoying the outdoors. Highlights this 
                        year include an Alaskan cruise, the F1 Race at COTA, and Texas Stars (AHL) games.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim 
                        in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor 
                        interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>
            </div>
            <div className={styles.signatureSection}>
                <img
                    src="/sig.png"
                    alt="Signature"
                    className={styles.signatureImage}
                />
            </div>
        </div>
    );
};

export default About;
