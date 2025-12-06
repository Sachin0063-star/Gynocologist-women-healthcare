import React, { useState, useEffect, useRef } from 'react';
import { Heart, Award, Users, Clock, Phone, Mail, MapPin, ChevronDown, Check, Star, Shield, Sparkles, Calendar, ArrowRight, Menu, X, MessageCircle, Send, User, FileText, CreditCard } from 'lucide-react';

export default function PremiumGynoClinic() {
  const [activeService, setActiveService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showSetup, setShowSetup] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Chatbox states
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to Gynocologist Women Private Clinic. How can I help you today?' }
  ]);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    reason: '',
    preferredDate: '',
    preferredTime: '',
    service: '',
    insurance: '',
    firstVisit: '',
    message: ''
  });
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: <Users />, number: '15K+', label: 'Patients', color: 'from-purple-500 to-pink-500' },
    { icon: <Award />, number: '30+', label: 'Years', color: 'from-pink-500 to-rose-500' },
    { icon: <Shield />, number: '99.8%', label: 'Success', color: 'from-rose-500 to-orange-500' },
    { icon: <Clock />, number: '24/7', label: 'Care', color: 'from-orange-500 to-amber-500' }
  ];

  const services = [
    { 
      title: 'Prenatal Care', 
      desc: 'Comprehensive pregnancy support',
      details: 'Expert care including check-ups, ultrasounds, and 24/7 emergency support.',
      icon: '🤰',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      fee: '$150-300 per visit'
    },
    { 
      title: 'Gynecological Exams', 
      desc: 'Preventive screenings',
      details: 'Annual exams, Pap smears, and diagnostic procedures.',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      gradient: 'from-pink-500 to-rose-500',
      fee: '$100-250 per visit'
    },
    { 
      title: 'Family Planning', 
      desc: 'Reproductive solutions',
      details: 'Contraception, fertility treatments, and health planning.',
      icon: '👨‍👩‍👧',
      image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&h=400&fit=crop',
      gradient: 'from-rose-500 to-orange-500',
      fee: '$120-280 per consultation'
    },
    { 
      title: 'Menopause Management', 
      desc: 'Life transition support',
      details: 'Hormone therapy and symptom management.',
      icon: '🌸',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
      gradient: 'from-orange-500 to-amber-500',
      fee: '$130-260 per visit'
    },
    { 
      title: 'Minimally Invasive Surgery', 
      desc: 'Advanced procedures',
      details: 'Laparoscopic surgery with faster recovery.',
      icon: '⚕',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
      gradient: 'from-amber-500 to-yellow-500',
      fee: '$2,000-8,000 depending on procedure'
    },
    { 
      title: 'Adolescent Care', 
      desc: 'Care for young women',
      details: 'Education and preventive care for teens.',
      icon: '💝',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      gradient: 'from-yellow-500 to-green-500',
      fee: '$90-200 per visit'
    }
  ];

  const testimonials = [
    { 
      name: 'Sarah Mitchell', 
      text: 'The care during my pregnancy was exceptional. The team went above and beyond.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      role: 'New Mother'
    },
    { 
      name: 'Emily Rodriguez', 
      text: 'Finally found a clinic that truly listens. The professionalism is remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      role: 'Regular Patient'
    },
    { 
      name: 'Jessica Chen', 
      text: 'From the moment I walked in, I felt valued. The personalized care is outstanding.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop',
      role: 'Long-term Patient'
    }
  ];

  const faqs = [
    { q: 'What should I bring to my first appointment?', a: 'Please bring ID, insurance card, medication list, and any medical records.' },
    { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance plans. Contact us to verify your coverage.' },
    { q: 'How often should I schedule check-ups?', a: 'We recommend annual wellness exams. Your doctor may suggest more frequent visits.' },
    { q: 'Do you offer emergency services?', a: 'Yes, we provide 24/7 emergency care. Call our emergency hotline anytime.' }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    // { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  // Chatbox functions
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    // Process the response based on current step
    processUserInput(inputValue);
    
    // Clear input
    setInputValue('');
  };

  const processUserInput = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Initial greeting handling
    if (currentStep === 'welcome') {
      if (lowerInput.includes('appointment') || lowerInput.includes('book') || lowerInput.includes('schedule')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'I can help you book an appointment. Let me gather some information first. What is your full name?' 
        }]);
        setCurrentStep('name');
      } else if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Our consultation fees vary by service. Here\'s a general overview:\n• Initial consultation: $150-250\n• Follow-up visits: $100-200\n• Specialized procedures: $300-800\n\nWhich service are you interested in learning more about?' 
        }]);
        setCurrentStep('fee_inquiry');
      } else if (lowerInput.includes('service') || lowerInput.includes('what') || lowerInput.includes('offer')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'We offer a comprehensive range of services including:\n• Prenatal Care\n• Gynecological Exams\n• Family Planning\n• Menopause Management\n• Minimally Invasive Surgery\n• Adolescent Care\n\nWould you like to know more about any of these services?' 
        }]);
        setCurrentStep('service_inquiry');
      } else {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'I can help you with booking appointments, information about our services, or fee details. What would you like to know?' 
        }]);
      }
    } 
    // Name collection
    else if (currentStep === 'name') {
      setPatientInfo(prev => ({ ...prev, name: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: `Thank you, ${input}. How old are you?` 
      }]);
      setCurrentStep('age');
    } 
    // Age collection
    else if (currentStep === 'age') {
      setPatientInfo(prev => ({ ...prev, age: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Thank you. What is your phone number?' 
      }]);
      setCurrentStep('phone');
    } 
    // Phone collection
    else if (currentStep === 'phone') {
      setPatientInfo(prev => ({ ...prev, phone: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Great. What is your email address?' 
      }]);
      setCurrentStep('email');
    } 
    // Email collection
    else if (currentStep === 'email') {
      setPatientInfo(prev => ({ ...prev, email: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Thank you. Is this your first visit to our clinic?' 
      }]);
      setCurrentStep('first_visit');
    } 
    // First visit
    else if (currentStep === 'first_visit') {
      setPatientInfo(prev => ({ ...prev, firstVisit: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Do you have insurance that you would like to use for this visit?' 
      }]);
      setCurrentStep('insurance');
    } 
    // Insurance
    else if (currentStep === 'insurance') {
      setPatientInfo(prev => ({ ...prev, insurance: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Which service are you interested in?\n• Prenatal Care\n• Gynecological Exams\n• Family Planning\n• Menopause Management\n• Minimally Invasive Surgery\n• Adolescent Care' 
      }]);
      setCurrentStep('service');
    } 
    // Service selection
    else if (currentStep === 'service') {
      setPatientInfo(prev => ({ ...prev, service: input }));
      
      // Find the service fee
      const serviceFee = services.find(s => s.title.toLowerCase() === input.toLowerCase())?.fee || 'Please inquire at the clinic';
      
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: `Thank you. The fee for ${input} is ${serviceFee}. What is your preferred date for the appointment?` 
      }]);
      setCurrentStep('preferred_date');
    } 
    // Preferred date
    else if (currentStep === 'preferred_date') {
      setPatientInfo(prev => ({ ...prev, preferredDate: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'What is your preferred time for the appointment?' 
      }]);
      setCurrentStep('preferred_time');
    } 
    // Preferred time
    else if (currentStep === 'preferred_time') {
      setPatientInfo(prev => ({ ...prev, preferredTime: input }));
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Is there anything specific you would like to discuss during your appointment?' 
      }]);
      setCurrentStep('reason');
    } 
    // Reason for visit
    else if (currentStep === 'reason') {
      setPatientInfo(prev => ({ ...prev, reason: input }));
      
      // Confirm appointment
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: `Thank you for providing all the information. Here's a summary of your appointment request:\n\nName: ${patientInfo.name}\nAge: ${patientInfo.age}\nPhone: ${patientInfo.phone}\nEmail: ${patientInfo.email}\nService: ${patientInfo.service}\nDate: ${patientInfo.preferredDate}\nTime: ${patientInfo.preferredTime}\n\nPlease confirm by typing "confirm" to book this appointment.` 
      }]);
      setCurrentStep('confirmation');
    } 
    // Confirmation
    else if (currentStep === 'confirmation') {
      if (lowerInput.includes('confirm')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: `Thank you! Your appointment has been successfully booked. You will receive a confirmation email at ${patientInfo.email} and a text message at ${patientInfo.phone} shortly.\n\nIf you need to reschedule or have any questions, please call us at +91 9999999999.\n\nIs there anything else I can help you with?` 
        }]);
        setCurrentStep('complete');
        
        // Reset patient info for next appointment
        setPatientInfo({
          name: '',
          age: '',
          phone: '',
          email: '',
          reason: '',
          preferredDate: '',
          preferredTime: '',
          service: '',
          insurance: '',
          firstVisit: '',
          message: ''
        });
      } else {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'To confirm your appointment, please type "confirm". If you need to make changes, please let me know what you would like to modify.' 
        }]);
      }
    } 
    // After appointment is complete
    else if (currentStep === 'complete') {
      if (lowerInput.includes('appointment') || lowerInput.includes('book') || lowerInput.includes('schedule')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'I can help you book another appointment. Let me gather some information first. What is your full name?' 
        }]);
        setCurrentStep('name');
      } else if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Our consultation fees vary by service. Here\'s a general overview:\n• Initial consultation: $150-250\n• Follow-up visits: $100-200\n• Specialized procedures: $300-800\n\nWhich service are you interested in learning more about?' 
        }]);
        setCurrentStep('fee_inquiry');
      } else if (lowerInput.includes('service') || lowerInput.includes('what') || lowerInput.includes('offer')) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'We offer a comprehensive range of services including:\n• Prenatal Care\n• Gynecological Exams\n• Family Planning\n• Menopause Management\n• Minimally Invasive Surgery\n• Adolescent Care\n\nWould you like to know more about any of these services?' 
        }]);
        setCurrentStep('service_inquiry');
      } else {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'I can help you with booking appointments, information about our services, or fee details. What would you like to know?' 
        }]);
        setCurrentStep('welcome');
      }
    } 
    // Fee inquiry
    else if (currentStep === 'fee_inquiry') {
      const service = services.find(s => s.title.toLowerCase().includes(lowerInput));
      
      if (service) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: `The fee for ${service.title} is ${service.fee}. This includes consultation and basic procedures. Additional tests or treatments may have separate charges.\n\nWould you like to book an appointment for this service?` 
        }]);
        setCurrentStep('welcome');
      } else {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'For specific fee information, please specify which service you are interested in. Would you like to book an appointment?' 
        }]);
        setCurrentStep('welcome');
      }
    } 
    // Service inquiry
    else if (currentStep === 'service_inquiry') {
      const service = services.find(s => s.title.toLowerCase().includes(lowerInput));
      
      if (service) {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: `${service.title}: ${service.details}\n\nFee: ${service.fee}\n\nWould you like to book an appointment for this service?` 
        }]);
        setCurrentStep('welcome');
      } else {
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'I can provide more information about our services. Please specify which service you are interested in, or would you like to book an appointment?' 
        }]);
        setCurrentStep('welcome');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-100%); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide { animation: slideIn 0.5s ease-out; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .hover-line { position: relative; }
        .hover-line::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 3px; background: linear-gradient(to right, #a855f7, #ec4899); transition: width 0.3s; }
        .hover-line:hover::after { width: 100%; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Heart className={`w-8 h-8 sm:w-10 sm:h-10 ${scrollY > 50 ? 'text-pink-600' : 'text-white'}`} fill="currentColor" />
              <span className={`text-lg sm:text-2xl font-bold ${scrollY > 50 ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-white'}`}>
                Gynocologist Clinic
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover-line ${scrollY > 50 ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-pink-200'}`}
                >
                  {link.name}
                </a>
              ))}
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-all">
                Book Now
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-xl">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-all w-full">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 opacity-95"></div>
        <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop" alt="Healthcare" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white/10 animate-float" style={{
              width: Math.random() * 200 + 50, height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }} />
          ))}
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Your Health,<br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Our Priority</span>
          </h1>

          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-purple-600 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-2xl">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> Book Appointment
            </span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative -mt-20 sm:-mt-24 z-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center hover:scale-105 transition-all shadow-xl sm:shadow-2xl">
                <div className={`inline-flex w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} mb-3 sm:mb-4 items-center justify-center`}>
                  {React.cloneElement(stat.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' })}
                </div>
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 inline-block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Excellence in Every Detail
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { icon: '👩‍⚕', title: 'Expert Team', desc: 'Board-certified specialists with decades of experience', gradient: 'from-purple-500 to-pink-500' },
              { icon: '🏥', title: 'Modern Facility', desc: 'State-of-the-art technology in luxurious comfort', gradient: 'from-pink-500 to-rose-500' },
              { icon: '💖', title: 'Personalized Care', desc: 'Tailored treatment plans for your unique needs', gradient: 'from-rose-500 to-orange-500' }
            ].map((item, idx) => (
              <div key={idx} className="group relative hover-line">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all`}></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 inline-block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Comprehensive Care
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group relative hover-line">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all`}></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`}></div>
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl md:text-6xl group-hover:scale-125 transition-all">{service.icon}</div>
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.desc}</p>
                    <p className="text-purple-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Fee: {service.fee}</p>
                    <button onClick={() => setActiveService(activeService === idx ? null : idx)} className="flex items-center gap-2 text-pink-600 font-semibold hover:gap-4 transition-all text-sm sm:text-base">
                      Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    {activeService === idx && <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t text-gray-700 text-sm sm:text-base animate-slide">{service.details}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 inline-block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Stories That Inspire
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((test, idx) => (
              <div key={idx} className="group relative hover-line">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all"></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <img src={test.image} alt={test.name} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-3 sm:border-4 border-pink-200 shadow-lg group-hover:scale-110 transition-all" />
                    <div>
                      <div className="flex gap-1 mb-1 sm:mb-2">
                        {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <h4 className="font-bold text-sm sm:text-base md:text-lg">{test.name}</h4>
                      <p className="text-xs sm:text-sm text-pink-600 font-semibold">{test.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base md:text-lg">"{test.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 inline-block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">Got Questions?</h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group relative">
                <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl overflow-hidden transition-all ${activeFaq === idx ? 'shadow-xl sm:shadow-2xl' : 'shadow-lg'}`}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transition-all" style={{ transform: activeFaq === idx ? 'scaleY(1)' : 'scaleY(0)' }}></div>
                  <button className="w-full p-4 sm:p-6 md:p-8 text-left flex justify-between items-center" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                    <span className="font-bold text-base sm:text-lg md:text-xl pr-4">{faq.q}</span>
                    <ChevronDown className={`text-pink-600 transition-all ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} sm:size={24} md:size={28} />
                  </button>
                  <div className={`overflow-hidden transition-all ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 text-gray-700 text-sm sm:text-base md:text-lg">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600"></div>
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-base sm:text-lg md:text-xl text-pink-100">We're here to answer your questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none text-sm sm:text-base" />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none text-sm sm:text-base" />
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none text-sm sm:text-base" />
                <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none resize-none text-sm sm:text-base"></textarea>
                <button onClick={handleSubmit} className={`w-full py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl hover:scale-105 ${formSubmitted ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'}`}>
                  {formSubmitted ? <span className="flex items-center justify-center gap-2"><Check size={20} sm:size={24} /> Sent!</span> : 'Send Message'}
                </button>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-white">
              {[
                { icon: <Phone size={24} sm:size={28} md:size={32} />, title: 'Phone', info: '+91 9999999999' },
                { icon: <Mail size={24} sm:size={28} md:size={32} />, title: 'Email', info: 'info@gynoclinic.com' },
                { icon: <MapPin size={24} sm:size={28} md:size={32} />, title: 'Address', info: 'New Delhi 110092, Mandawali West Vinod Nagar, Medical District' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-white/20 p-2 sm:p-3 md:p-4 rounded-xl">{item.icon}</div>
                    <div><h4 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">{item.title}</h4><p className="text-pink-100 text-sm sm:text-base md:text-lg">{item.info}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" />
            <span className="text-lg sm:text-2xl font-bold">Gynocologist Clinic</span>
          </div>
          <p className="text-pink-200 mb-4 sm:mb-6 text-sm sm:text-base">Your health, our priority</p>
          <p className="text-xs sm:text-sm text-pink-300">© 2025 Gynocologist Clinic. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbox */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all animate-pulse"
          >
            <MessageCircle size={20} sm:size={24} md:size={28} />
          </button>
        ) : (
          <div className={`bg-white rounded-2xl shadow-2xl flex flex-col ${window.innerWidth < 640 ? 'w-[calc(100vw-2rem)] h-[80vh]' : 'w-96 h-[500px]'}`}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 sm:p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} sm:size={24} />
                <h3 className="font-bold text-sm sm:text-base md:text-lg">Appointment Assistant</h3>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1"
              >
                <X size={16} sm:size={20} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 sm:p-3 rounded-2xl text-xs sm:text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Actions */}
            {currentStep === 'welcome' && (
              <div className="px-3 sm:px-4 py-2 border-t border-gray-200">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => {
                      setInputValue('Book appointment');
                      processUserInput('Book appointment');
                    }}
                    className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    Book
                  </button>
                  <button
                    onClick={() => {
                      setInputValue('Service information');
                      processUserInput('Service information');
                    }}
                    className="bg-pink-100 text-pink-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-pink-200 transition-colors"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => {
                      setInputValue('Fee information');
                      processUserInput('Fee information');
                    }}
                    className="bg-rose-100 text-rose-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-rose-200 transition-colors"
                  >
                    Fees
                  </button>
                </div>
              </div>
            )}
            
            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="p-3 sm:p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-1.5 sm:p-2 hover:shadow-md transition-all"
                >
                  <Send size={14} sm:size={16} md:size={20} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
