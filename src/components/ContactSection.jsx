import { useState } from 'react';
import { Send, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import Button from './Button';

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Nairobi, Kenya',
      color: 'text-primary-400'
    },
    {
      icon: Phone,
      title: 'Let\'s Talk',
      details: 'Available for calls',
      color: 'text-accent-400'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="contact" className="section bg-slate-800/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited about new opportunities 
            and interesting projects. Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-100 placeholder-slate-400 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-100 placeholder-slate-400 transition-all"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-100 placeholder-slate-400 transition-all resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <Button type="submit" icon={Send} className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`p-3 bg-slate-700/50 rounded-xl ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 mb-1">{info.title}</h4>
                      <p className="text-slate-300">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="card">
              <h3 className="text-xl font-bold mb-6 text-slate-100">Quick Connect</h3>
              <div className="space-y-4">
                <Button 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  variant="outline"
                  className="w-full justify-start"
                  icon={SOCIAL_LINKS[2].icon}
                >
                  Send Email
                </Button>
                <Button 
                  href={PERSONAL_INFO.github}
                  variant="ghost"
                  className="w-full justify-start"
                  icon={SOCIAL_LINKS[0].icon}
                >
                  View GitHub Profile
                </Button>
                <Button 
                  href={PERSONAL_INFO.linkedin}
                  variant="ghost"
                  className="w-full justify-start"
                  icon={SOCIAL_LINKS[1].icon}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-slate-400 mb-6">Follow me on social media</p>
              <div className="flex justify-center space-x-6">
                {SOCIAL_LINKS.map((link, index) => (
                  <motion.a 
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`text-slate-400 ${link.color} transition-colors p-3 rounded-full hover:bg-slate-700/50`}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <link.icon size={28} />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;  