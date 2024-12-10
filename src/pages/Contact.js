import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.pageHeader}>
        <h1>Contact Me</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles['form-input']}
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className={styles['form-textarea']}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles['submit-button']}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
