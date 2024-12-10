import React from 'react';
import './IndvProjectModule.css'; 

const ProjectB = () => {
    return (
        <div className="projectPage">
            {/* Project title and subtitle */}
            <header className="projectHeader">
                <h1 className="projectTitle">Project B</h1>
            </header>

            {/* Problem statement */}
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
                        src="/problem-solving.png"
                        alt="Problem statement image. Confused man."
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
                        src="/1701161595952.png"
                        alt="Research image. Magnifying glass"
                        className="sectionImage"
                    />
                </div>
            </section>

            {/* Design process */}
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
                        src="/istockphoto-1041512964-612x612.jpg"
                        alt="Implementation image. Business woman celebrating."
                        className="sectionImage"
                    />
                </div>
            </section>
        </div>
    );
};

export default ProjectB;
