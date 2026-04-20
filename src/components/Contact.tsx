import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Globe, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-heading mb-8">
              Let's Build Your <span className="text-gradient-rust italic">Vision</span>
            </h2>
            <p className="text-muted text-lg font-light mb-12 leading-relaxed">
              We are ready to turn your complex challenges into bold, lasting solutions. Contact us today to discuss your next landmark project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 border border-rust/30 flex items-center justify-center group-hover:bg-rust/10 transition-colors">
                  <Phone size={20} className="text-rust" />
                </div>
                <div>
                  <p className="text-muted-strong text-xs uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-heading text-lg font-poppins">+92 (051) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 border border-rust/30 flex items-center justify-center group-hover:bg-rust/10 transition-colors">
                  <Mail size={20} className="text-rust" />
                </div>
                <div>
                  <p className="text-muted-strong text-xs uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-heading text-lg font-poppins">info@mcorp.com.pk</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 border border-rust/30 flex items-center justify-center group-hover:bg-rust/10 transition-colors">
                  <MapPin size={20} className="text-rust" />
                </div>
                <div>
                  <p className="text-muted-strong text-xs uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-heading text-lg font-poppins">Blue Area, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              {[Globe, MessageCircle, Share2, ExternalLink].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#991B06" }}
                  className="w-10 h-10 flex items-center justify-center text-muted-strong border border-border-light"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background/50 backdrop-blur-sm p-8 md:p-12 border border-border-subtle transition-colors duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-strong uppercase tracking-widest font-bold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-glass border-b border-border-medium px-4 py-3 text-heading focus:outline-none focus:border-rust transition-colors"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-strong uppercase tracking-widest font-bold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-glass border-b border-border-medium px-4 py-3 text-heading focus:outline-none focus:border-rust transition-colors"
                    placeholder="john@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-strong uppercase tracking-widest font-bold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-glass border-b border-border-medium px-4 py-3 text-heading focus:outline-none focus:border-rust transition-colors"
                    placeholder="+92 300 1234567"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-strong uppercase tracking-widest font-bold">Project Type</label>
                  <select
                    name="projectType"
                    className="w-full bg-glass border-b border-border-medium px-4 py-3 text-heading focus:outline-none focus:border-rust transition-colors"
                    onChange={handleChange}
                  >
                    <option className="bg-background text-heading">Residential</option>
                    <option className="bg-background text-heading">Commercial</option>
                    <option className="bg-background text-heading">Civil Works</option>
                    <option className="bg-background text-heading">Renovation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-muted-strong uppercase tracking-widest font-bold">Project Description</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-glass border-b border-border-medium px-4 py-3 text-heading focus:outline-none focus:border-rust transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-rust text-white font-poppins font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-3 group hover:bg-rust-light transition-colors duration-300"
              >
                <span>Send Inquiry</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
