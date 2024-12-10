import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { question: "What is your background?", answer: "I’m a Product Designer with a passion for creating intuitive user experiences" },
        { question: "What services do you offer?", answer: "I offer product design, UI/UX design, wireframing, prototyping, and front-end development." },
        { question: "What technologies do you use?", answer: "I primarily work with Figma for design, and React, HTML, CSS, JavaScript for development." },
        { question: "How do I get in touch with you?", answer: "You can reach me through the contact page on this website." },
    ];

    return (
        <div className={styles.faqPage}>
            <header className={styles.faqHeader}>
                <h1>Frequently Asked Questions</h1>
            </header>

            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleActive(index)}
                    >
                        <h3>
                            {faq.question}
                            <span className={styles.chevron}></span>
                        </h3>
                        {activeIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
