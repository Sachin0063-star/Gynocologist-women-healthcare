import React, { useState, useEffect } from 'react';
import { Heart, Award, Users, Clock, Phone, Mail, MapPin, ChevronDown, Check, Star, Shield, Sparkles, Calendar, ArrowRight, Menu, X } from 'lucide-react';

export default function PremiumGynoClinic() {
  const [activeService, setActiveService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showSetup, setShowSetup] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Gynecological Exams', 
      desc: 'Preventive screenings',
      details: 'Annual exams, Pap smears, and diagnostic procedures.',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      title: 'Family Planning', 
      desc: 'Reproductive solutions',
      details: 'Contraception, fertility treatments, and health planning.',
      icon: '👨‍👩‍👧',
      image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&h=400&fit=crop',
      gradient: 'from-rose-500 to-orange-500'
    },
    { 
      title: 'Menopause Management', 
      desc: 'Life transition support',
      details: 'Hormone therapy and symptom management.',
      icon: '🌸',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      title: 'Minimally Invasive Surgery', 
      desc: 'Advanced procedures',
      details: 'Laparoscopic surgery with faster recovery.',
      icon: '⚕',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
      gradient: 'from-amber-500 to-yellow-500'
    },
    { 
      title: 'Adolescent Care', 
      desc: 'Care for young women',
      details: 'Education and preventive care for teens.',
      icon: '💝',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      gradient: 'from-yellow-500 to-green-500'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-100%); } to { opacity: 1; transform: translateX(0); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide { animation: slideIn 0.5s ease-out; }
        .hover-line { position: relative; }
        .hover-line::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 3px; background: linear-gradient(to right, #a855f7, #ec4899); transition: width 0.3s; }
        .hover-line:hover::after { width: 100%; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Heart className={`w-10 h-10 ${scrollY > 50 ? 'text-pink-600' : 'text-white'}`} fill="currentColor" />
            <span className={`text-2xl font-bold ${scrollY > 50 ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-white'}`}>
              Gynocologist women private clinic
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-6">
            Your Health,<br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Our Priority</span>
          </h1>
          {/* <p className="text-2xl mb-12 text-pink-400 max-w-3xl mx-auto">
            Experience compassionate, cutting-edge care for women at every stage
          </p> */}
          <button className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Book Appointment
            </span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative -mt-24 z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
              <div className="relative bg-white rounded-3xl p-8 text-center hover:scale-105 transition-all shadow-2xl">
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 items-center justify-center`}>
                  {React.cloneElement(stat.icon, { className: 'w-8 h-8 text-white' })}
                </div>
                <div className={`text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 inline-block">
              WHY CHOOSE US
            </span>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Excellence in Every Detail
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: '👩‍⚕', title: 'Expert Team', desc: 'Board-certified specialists with decades of experience', gradient: 'from-purple-500 to-pink-500' },
              { icon: '🏥', title: 'Modern Facility', desc: 'State-of-the-art technology in luxurious comfort', gradient: 'from-pink-500 to-rose-500' },
              { icon: '💖', title: 'Personalized Care', desc: 'Tailored treatment plans for your unique needs', gradient: 'from-rose-500 to-orange-500' }
            ].map((item, idx) => (
              <div key={idx} className="group relative hover-line">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all`}></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">{item.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 inline-block">
              OUR SERVICES
            </span>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Comprehensive Care
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group relative hover-line">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all`}></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`}></div>
                    <div className="absolute top-6 right-6 text-6xl group-hover:scale-125 transition-all">{service.icon}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <button onClick={() => setActiveService(activeService === idx ? null : idx)} className="flex items-center gap-2 text-pink-600 font-semibold hover:gap-4 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                    {activeService === idx && <div className="mt-4 pt-4 border-t text-gray-700 animate-slide">{service.details}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-32 px-6 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 inline-block">
              TESTIMONIALS
            </span>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Stories That Inspire
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((test, idx) => (
              <div key={idx} className="group relative hover-line">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <img src={test.image} alt={test.name} className="w-20 h-20 rounded-full object-cover border-4 border-pink-200 shadow-lg group-hover:scale-110 transition-all" />
                    <div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <h4 className="font-bold text-lg">{test.name}</h4>
                      <p className="text-sm text-pink-600 font-semibold">{test.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg">"{test.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 inline-block">FAQ</span>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">Got Questions?</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group relative">
                <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden transition-all ${activeFaq === idx ? 'shadow-2xl' : 'shadow-lg'}`}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transition-all" style={{ transform: activeFaq === idx ? 'scaleY(1)' : 'scaleY(0)' }}></div>
                  <button className="w-full p-8 text-left flex justify-between items-center" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                    <span className="font-bold text-xl pr-4">{faq.q}</span>
                    <ChevronDown className={`text-pink-600 transition-all ${activeFaq === idx ? 'rotate-180' : ''}`} size={28} />
                  </button>
                  <div className={`overflow-hidden transition-all ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-8 pb-8 text-gray-700 text-lg">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600"></div>
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-6xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-pink-100">We're here to answer your questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <div className="space-y-6">
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none" />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none" />
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-6 py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none" />
                <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" className="w-full px-6 py-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none resize-none"></textarea>
                <button onClick={handleSubmit} className={`w-full py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:scale-105 ${formSubmitted ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'}`}>
                  {formSubmitted ? <span className="flex items-center justify-center gap-2"><Check size={24} /> Sent!</span> : 'Send Message'}
                </button>
              </div>
            </div>
            <div className="space-y-8 text-white">
              {[
                { icon: <Phone size={32} />, title: 'Phone', info: '+91 9999999999' },
                { icon: <Mail size={32} />, title: 'Email', info: 'info@gynocologistewomen.com' },
                { icon: <MapPin size={32} />, title: 'Address', info: 'new delhi 110092 ,mandawali west vinod nagar, Medical District' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-4 rounded-xl">{item.icon}</div>
                    <div><h4 className="font-bold text-xl mb-2">{item.title}</h4><p className="text-pink-100 text-lg">{item.info}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8" fill="currentColor" />
            <span className="text-2xl font-bold">Gynocologist women private clinic</span>
          </div>
          <p className="text-pink-200 mb-6">Your health, our priority</p>
          <p className="text-sm text-pink-300">© 2025 Gynocologist women private clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}