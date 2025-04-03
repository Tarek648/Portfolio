import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';


emailjs.init('H2Rfbe43_zR70vMr_');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      
      await emailjs.send(
        'service_mn3kfqj',
        'template_irbs25f',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'tarek.semhan2003@gmail.com', 
          message: formData.message,
          reply_to: formData.email,
        }
      );
      
      await emailjs.send(
        'service_mn3kfqj',
        'template_ewpqbov',
        {
          from_name: formData.name,
          from_email: formData.email,
          user_message: formData.message,
          reply_to: 'tarek.semhan2003@gmail.com'
        }
      );
      
      
      

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Email error:', err);
      setError('Message received! (Auto-reply failed)');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll do my best to get back to you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>tarek.semhan2003@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+961 76020867</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          {error && (
            <div className="error-message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              {error}
            </div>
          )}

          {submitted && (
            <div className="success-message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
              Message sent successfully!
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;