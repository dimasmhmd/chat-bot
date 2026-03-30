import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, ArrowRight } from 'lucide-react';
import ChatWidget from './ChatWidget'; // <-- Mengimpor Chatbot

// --- KOMPONEN NAVBAR ---
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Solutions', 'Products', 'Services', 'About', 'Resources', 'Support'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-white/10
      ${isScrolled ? 'bg-[#103070]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-white px-2 py-1.5 rounded shadow-sm">
             <img src="image_5ffce0.png" alt="Intikom Logo" className="h-8 md:h-10 object-contain" />
          </div>
        </div>

        {/* Navigasi Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-white/90 hover:text-white cursor-pointer text-[14px] font-medium transition-colors group">
              {link} <ChevronDown size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Aksi Kanan (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-white/90 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="bg-[#E01E26] hover:bg-[#c91820] text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-md hover:shadow-lg text-sm tracking-wide">
            Contact Us
          </button>
        </div>

        {/* Toggle Menu Mobile */}
        <div className="lg:hidden text-white cursor-pointer">
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
}

// --- KOMPONEN HERO SECTION ---
function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center bg-[#0a1930] overflow-hidden">
      {/* Background Image (Jaringan/Kota) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("[https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop)")',
          opacity: 0.3
        }}
      ></div>
      
      {/* Overlay Gradient Biru */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14429A]/90 via-[#14429A]/70 to-transparent mix-blend-multiply"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] mb-6 drop-shadow-lg">
            Enhance Interconnectivity with Our Transmission Network Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-50/90 mb-10 leading-relaxed max-w-xl font-light">
            Enhance the speed, reliability, and efficiency of your telco business with Intikom's advanced transmission network solutions.
          </p>
          <button className="bg-[#E01E26] hover:bg-[#c91820] text-white px-8 py-3.5 rounded-md font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-red-500/30">
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Indikator Slider (Visual Saja) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#E01E26] cursor-pointer"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/40 cursor-pointer hover:bg-white/60 transition-colors"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/40 cursor-pointer hover:bg-white/60 transition-colors"></div>
      </div>
    </div>
  );
}

// --- KOMPONEN KONTEN UTAMA (BERITA) ---
function MainContent() {
  const newsItems = [
    { 
      title: "Intikom Sukses Implementasi Infrastruktur Jaringan di 10 Kota Besar", 
      date: "24 Okt 2025",
      img: "[https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop)"
    },
    { 
      title: "Kemitraan Strategis Intikom dan Penyedia Layanan Cloud Global", 
      date: "15 Sep 2025",
      img: "[https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop)"
    },
    { 
      title: "Solusi Keamanan Siber Intikom Diakui Memenuhi Standar Internasional", 
      date: "02 Agu 2025",
      img: "[https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop)"
    }
  ];

  return (
    <div className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Seksi */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#14429A] mb-5 tracking-tight">Recent News</h2>
          {/* Garis Merah Kecil */}
          <div className="w-16 h-1.5 bg-[#E01E26] mx-auto rounded-full"></div>
        </div>

        {/* Grid Kartu Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer group flex flex-col">
              
              <div className="h-52 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#14429A]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={news.img} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className="p-7 flex flex-col flex-1">
                <p className="text-sm font-medium text-gray-500 mb-3">{news.date}</p>
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-[#14429A] transition-colors mb-4">
                  {news.title}
                </h3>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[#E01E26] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- KOMPONEN FOOTER ---
function Footer() {
  return (
    <footer className="bg-[#0f244a] text-white pt-16 pb-8 border-t-[4px] border-[#E01E26]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Konten Atas Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="bg-white inline-block px-3 py-2 rounded mb-6">
              <img src="image_5ffce0.png" alt="Intikom Logo" className="h-10 object-contain" />
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-md">
              PT. Intikom Berlian Mustika adalah penyedia solusi IT terkemuka di Indonesia, berdedikasi untuk mendorong transformasi digital melalui infrastruktur, layanan, dan inovasi yang handal.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-wide">Solutions</h4>
            <ul className="space-y-3 text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cyber Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transmission Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Consulting</a></li>
            </ul>
          </div>
        </div>

        {/* Garis Bawah & Hak Cipta */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-100/50">
          <p>&copy; {new Date().getFullYear()} PT. Intikom Berlian Mustika. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- MAIN APP (COMPANY PROFILE) ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E01E26] selection:text-white relative">
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
      
      {/* Memanggil Widget Chatbot dari komponen terpisah */}
      <ChatWidget />
    </div>
  );
}
