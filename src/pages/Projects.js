import React from 'react';
import Button from '../components/Button'; 
import styles from './Projects.module.css'; 

const Projects = () => {
    const projects = [
        { title: 'Project A', description: 'Behold the most amazing project ever.', link: '/project-a' },
        { title: 'Project B', description: 'Behold the worst project ever.', link: '/project-b' },
        { title: 'Project C', description: 'Get excited.', comingSoon: true },
    ];

    return (
        <div className={styles.projectsPage}>
            <header className={styles.pageHeader}>
                <h1>My Projects</h1>
            </header>

            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardContent}>{project.description}</p>
                        {project.comingSoon ? (
                            <Button 
                                label="Coming Soon" 
                                onClick={() => alert('Stay tuned!')} 
                                disabled 
                                className={styles.disabledButton} 
                            />
                        ) : (
                            <Button 
                                label="View Project" 
                                onClick={() => window.location.href = project.link} 
                                className={styles.cardButton} 
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
