import React from 'react';
import styles from './Resume.module.css'; 

const Resume = () => {
    return (
        <div className={styles.resumePage}>
            <header className={styles.resumeHeader}>
                <h1>My Resume</h1>
            </header>

            {/* Summary Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Summary</h2>
                <p>
                    Skilled user experience practitioner with a multidisciplinary background in Product Design, Product Management, and Industrial Engineering. Highly data-driven with demonstrated expertise in quantitative and qualitative analytics to optimize the user experience and drive design strategy.
                </p>
            </section>

            {/* Skills Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <ul className={styles.skillsList}>
                    <li>Service Design</li>
                    <li>User-centered Design (UCD)</li>
                    <li>Generative Research</li>
                    <li>User Research & Usability Studies</li>
                    <li>Data Synthesis</li>
                    <li>Quantitative & Qualitative Analysis</li>
                    <li>Wireframes & Prototypes</li>
                    <li>Design Strategy</li>
                    <li>Responsive Web Design (RWD)</li>
                </ul>
            </section>

            {/* Work Experience Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>
                <div className={styles.job}>
                    <h3 className={styles.jobTitle}>
                        Senior Product Designer <span className={styles.jobDate}>2021–Present</span>
                    </h3>
                    <p className={styles.jobCompany}>Acme Corp, Boston, MA</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                        <li>Nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
                <div className={styles.job}>
                    <h3 className={styles.jobTitle}>
                        UX Researcher <span className={styles.jobDate}>2018–2021</span>
                    </h3>
                    <p className={styles.jobCompany}>DesignHub, Austin, TX</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                        <li>Nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
                <div className={styles.job}>
                    <h3 className={styles.jobTitle}>
                        Junior UX Designer <span className={styles.jobDate}>2016–2018</span>
                    </h3>
                    <p className={styles.jobCompany}>Creative Solutions, Dallas, TX</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                        <li>Nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
            </section>

            {/* Education Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <p><strong>Master of Science in Software Development</strong>, Boston University, Expected 2025</p>
                <p><strong>Bachelor of Science in Industrial Engineering</strong>, Texas State University, Magna Cum Laude, 2019</p>
            </section>

            {/* Certifications Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Certifications</h2>
                <p><strong>Lean Green Belt</strong> | Institute of Industrial and Systems Engineers, 2018</p>
                <p><strong>Six Sigma Green Belt</strong> | Institute of Industrial and Systems Engineers, 2018</p>
            </section>

        </div>
    );
};

export default Resume;
