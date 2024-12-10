import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <header className={styles.homeHeader}>
                <h1>Hello!</h1>
                <p>
                    I’m Emily, a <span className={styles.highlight}>Product Designer</span> learning{' '}
                    <span className={styles.highlight}>front-end development</span>.
                </p>
            </header>
            <div className={styles.ctaSection}>
                <a href="/projects" className={styles.ctaButton}>See My Work</a>
            </div>
            <footer className={styles.homeFooter}>
                <a href="/contact" className={styles.contactLink}>Contact Me. Thanks.</a>
            </footer>
        </div>
    );
};

export default Home;
