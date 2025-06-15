import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Zap, CheckCircle, XCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xnnvdwow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      details: 'abhiramjaigopal@gmail.com',
      link: 'mailto:abhiramjaigopal@gmail.com',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      description: 'Drop me a line anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8919564350',
      link: 'tel:+8919564350',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      description: "Let's have a conversation",
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Hyderabad, Telangana',
      link: '#',
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      description: 'Available worldwide',
    },
  ];

  return (
      <section ref={sectionRef} id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300% bg-gradient-to-r">
                CONNECT
              </span>
            </h2>
            <div className="h-2 w-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full mb-12 animate-pulse" />
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">Ready to create something extraordinary together?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="relative p-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-xl" />

                <div className="relative">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                      Start a Conversation
                    </h3>
                    <p className="text-gray-400">Tell me about your vision, and let's bring it to life.</p>
                  </div>

                  {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center space-x-3">
                        <CheckCircle className="text-emerald-400" size={20} />
                        <div>
                          <p className="text-emerald-400 font-semibold">Message sent successfully!</p>
                          <p className="text-gray-300 text-sm">I'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                  )}

                  {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center space-x-3">
                        <XCircle className="text-red-400" size={20} />
                        <div>
                          <p className="text-red-400 font-semibold">Failed to send message</p>
                          <p className="text-gray-300 text-sm">{errorMessage}</p>
                        </div>
                      </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputField label="Your Name" name="name" value={formData.name} onChange={handleInputChange} />
                      <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <InputField label="Project Subject" name="subject" value={formData.subject} onChange={handleInputChange} />
                    <TextareaField label="Your Vision" name="message" value={formData.message} onChange={handleInputChange} />
                    <div onClick={handleSubmit}>
                      <SubmitButton isSubmitting={isSubmitting} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                    <a
                        key={method.title}
                        href={method.link}
                        className="group block p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 relative overflow-hidden"
                    >
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative flex items-center space-x-4">
                        <div className={`p-4 bg-gradient-to-br ${method.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20`}>
                          <method.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {method.title}
                          </h4>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{method.details}</p>
                          <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                        </div>
                      </div>
                    </a>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 animate-pulse" />

                <div className="relative">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
                    </div>
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold text-lg">
                      Available for Projects
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Currently accepting new client work and exciting collaborations. Let's create something amazing together!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-teal-400" />
                      <span>Response within 24h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap size={16} className="text-cyan-400" />
                      <span>Fast turnaround</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                    href="https://wa.me/918919564350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-green-600/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <MessageCircle size={24} className="text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-semibold text-sm">WhatsApp</span>
                  </div>
                </a>

                <div className="p-4 bg-gradient-to-br from-teal-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl border border-teal-500/30 text-center group">
                  <div className="relative">
                    <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                    <span className="text-white font-semibold text-sm">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

// Reusable Input field component with matching theme
const InputField = ({ label, name, value, onChange, type = "text" }: any) => (
    <div className="relative">
      <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-white placeholder-transparent peer"
          placeholder=" "
      />
      <label
          htmlFor={name}
          className="absolute left-6 -top-2.5 bg-black px-2 text-sm text-emerald-400 font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-emerald-400"
      >
        {label}
      </label>
    </div>
);

// Reusable Textarea with matching theme
const TextareaField = ({ label, name, value, onChange }: any) => (
    <div className="relative">
    <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={6}
        className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-white placeholder-transparent resize-none peer"
        placeholder=" "
    />
      <label
          htmlFor={name}
          className="absolute left-6 -top-2.5 bg-black px-2 text-sm text-emerald-400 font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-emerald-400"
      >
        {label}
      </label>
    </div>
);

// Reusable Submit Button with matching gradient
const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
    <div
        onClick={() => !isSubmitting && handleSubmit()}
        className="w-full group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50 cursor-pointer"
        style={{ opacity: isSubmitting ? 0.5 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center justify-center space-x-3">
        {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </>
        ) : (
            <>
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </>
        )}
      </div>
    </div>
);

export default Contact;