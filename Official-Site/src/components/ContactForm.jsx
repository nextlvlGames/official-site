import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({
      submitted: false,
      success: false,
      message: ''
    });

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_niizav7';
      const templateId = 'template_tpxhndp';
      const publicKey = 'U0Wu2Zjv54G758jn_';

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      if (result.text === 'OK') {
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        submitted: true,
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {status.submitted && (
        <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
          {status.message}
        </div>
      )}
      
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-soulblue-400 font-medium mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 bg-soulblue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-soulblue-400 font-medium mb-1">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 bg-soulblue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-soulblue-400 font-medium mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to tell us?"
            required
            rows="5"
            className="w-full px-4 py-2 bg-soulblue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-soulblue-400 resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-soulblue-500 hover:bg-soulblue-400 text-white font-bold py-3 rounded-lg shadow-lg transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
