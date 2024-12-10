import React from 'react';
import './IndvProjectModule.css'; 

const ProjectA = () => {
    return (
        <div className="projectPage">
            {/* Project title and subtitle */}
            <header className="projectHeader">
                <h1 className="projectTitle">Project A</h1>
            </header>

            {/* Problem Statement */}
            <section className="section">
                <h2 className="sectionTitle">Problem Statement</h2>
                <div className="sectionContent">
                    <p className="sectionText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget
                        tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Vivamus egestas euismod
                        arcu, ut imperdiet magna efficitur a. Integer nec magna libero. Aenean tincidunt lectus
                        id sapien vehicula, ut egestas justo tristique.
                    </p>
                    <img
                        src="/vaea-garrido-gxsyIKe83N0-unsplash.jpg"
                        alt="Problem statement image. A problematic cat."
                        className="sectionImage"
                    />
                </div>
            </section>

            {/* Research */}
            <section className="section">
                <h2 className="sectionTitle">Research</h2>
                <div className="sectionContent">
                    <p className="sectionText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur
                        tincidunt non ligula sed scelerisque. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Suspendisse potenti. Sed at orci ut arcu
                        pellentesque dapibus non vitae arcu.
                    </p>
                    <img
                        src="/alexey-turenkov-NEwe0UGsTfY-unsplash.jpg"
                        alt="Research image. Lady detective in a scary setting."
                        className="sectionImage"
                    />
                </div>
            </section>

            {/* Design Process*/}
            <section className="section">
                <h2 className="sectionTitle">Design Process</h2>
                <div className="sectionContent">
                    <p className="sectionText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis dolor vitae
                        magna pretium, id ultricies ipsum aliquet. Etiam quis neque vitae urna consequat
                        consequat. Suspendisse potenti. Proin ac libero arcu. Cras nec fermentum eros.
                    </p>
                    <img
                        src="/charlie-conspiracy-470x3102x.webp"
                        alt="Design process image. The design process will make you crazy."
                        className="sectionImage"
                    />
                </div>
            </section>

            {/* Implementation */}
            <section className="section">
                <h2 className="sectionTitle">Implementation</h2>
                <div className="sectionContent">
                    <p className="sectionText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum, purus a
                        aliquet viverra, justo eros convallis nisi, ac fringilla magna arcu quis lorem. Sed
                        aliquet venenatis urna nec hendrerit. Mauris vitae orci vitae quam faucibus egestas.
                    </p>
                    <img
                        src="/processingly-2pUP1Ts1bmo-unsplash.jpg"
                        alt="Implementation Image. Woman meditating. Peace at last."
                        className="sectionImage"
                    />
                </div>
            </section>
        </div>
    );
};

export default ProjectA;
