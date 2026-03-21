import React, { useState } from 'react';
import '../styles/Contact.css';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const FALLBACK_WEB3FORMS_ACCESS_KEY = 'REVOKED_WEB3FORMS_KEY';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastTitle, setToastTitle] = useState('Message Sent');
  const [toastText, setToastText] = useState('Thank you for your message! I will get back to you soon.');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const accessKey = (
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || FALLBACK_WEB3FORMS_ACCESS_KEY
      ).trim();

      if (!accessKey) {
        throw new Error('Web3Forms access key is missing. Add VITE_WEB3FORMS_ACCESS_KEY in your environment file and redeploy.');
      }

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Unable to send message right now. Please try again.');
      }

      setToastType('success');
      setToastTitle('Message Sent');
      setToastText('Thank you for your message! I will get back to you soon.');
      setIsToastVisible(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setToastType('error');
      setToastTitle('Send Failed');
      setToastText(error.message || 'Something went wrong while sending your message.');
      setIsToastVisible(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsToastVisible(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Open to internships, freelance projects, and exciting tech collaborations</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>As a Computer Science student, I'm open to internships and tech roles where I can solve real problems and grow as a developer.</p>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href="mailto:shekharsidhant88@gmail.com">shekharsidhant88@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919305724440">+91 9305724440</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://github.com/siddhantshekhar18" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/siddhant-shekhar-776579254/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/SiddShekhar18" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com/dead.soul__18?igsh=MWphZHlqajR3M2h0OA%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>

          <div className={`contact-toast ${toastType} ${isToastVisible ? 'show' : ''}`} role="status" aria-live="polite">
            <div className="contact-toast-icon">
              <i className={`fas ${toastType === 'success' ? 'fa-check-circle' : 'fa-triangle-exclamation'}`}></i>
            </div>
            <div className="contact-toast-content">
              <h5>{toastTitle}</h5>
              <p>{toastText}</p>
            </div>
            <button
              type="button"
              className="contact-toast-close"
              onClick={() => setIsToastVisible(false)}
              aria-label="Close notification"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
