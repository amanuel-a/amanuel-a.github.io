import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Let's work together</h2>
            <p>
              I'm always interested in hearing about new opportunities, 
              whether that's a full-time role, consulting project, or 
              speaking engagement.
            </p>
            <div className="contact-methods">
              <a href="mailto:hello@example.com" className="contact-method">
                <span className="icon">✉</span>
                <span>hello@example.com</span>
              </a>
              <a href="https://linkedin.com" className="contact-method">
                <span className="icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" className="contact-method">
                <span className="icon">🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;