import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  isIntroActive?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isIntroActive = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Handle link hover for cursor
  useEffect(() => {
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => setCursorVariant("hover"));
      link.addEventListener('mouseleave', () => setCursorVariant("default"));
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setCursorVariant("hover"));
        link.removeEventListener('mouseleave', () => setCursorVariant("default"));
      });
    }
  });


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isIntroActive) {
    return <main>{children}</main>;
  }

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "rgba(59, 130, 246, 0.8)", // Blue
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(249, 115, 22, 0.5)", // Orange on hover
      mixBlendMode: "difference" as any
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bst-cream selection:bg-bst-blue selection:text-white font-sans">
      {/* Custom Cursor - Hidden on Mobile */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-bst-blue pointer-events-none z-[100] hidden md:block backdrop-blur-sm"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3 border-b border-white/20' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo with Entrance Animation */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative w-10 h-10">
                 <div className="absolute inset-0 bg-gradient-to-tr from-bst-blue to-bst-light rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg"></div>
                 <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center border border-gray-100">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-bst-blue">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                 </div>
              </div>
              <span className={`text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-bst-blue to-bst-dark font-serif ${isScrolled ? '' : 'md:text-white/90 md:from-white md:to-white'}`}>
                BST EVENTS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group tracking-wide ${
                  location.pathname === link.path 
                    ? (isScrolled ? 'text-bst-blue' : 'text-white') 
                    : (isScrolled ? 'text-gray-600 hover:text-bst-blue' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-bst-accent transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all border border-white/10"
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-bst-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl z-[60] overflow-hidden border-b border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold ${
                    location.pathname === link.path ? 'text-bst-blue' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center mt-4 px-6 py-3 bg-bst-blue text-white rounded-xl font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-bst-dark text-white pt-16 md:pt-20 pb-10 relative overflow-hidden font-sans">
        {/* Footer ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-bst-blue to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-br from-bst-blue to-bst-grape rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight font-serif">BST EVENTS</span>
              </div>
              <p className="text-gray-400 max-w-md mb-8 leading-relaxed font-light text-sm md:text-base">
                Creating unforgettable experiences through precision event management, innovative exhibition designs, and strategic branding solutions that leave a lasting impact.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-bst-blue hover:border-bst-blue transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white font-serif">Quick Links</h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-bst-blue transition-colors flex items-center gap-2 group w-fit">
                      <span className="w-1 h-1 bg-bst-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white font-serif">Contact Us</h3>
              <ul className="space-y-4 text-gray-400 text-sm md:text-base">
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-bst-blue/10 flex items-center justify-center text-bst-blue group-hover:bg-bst-blue group-hover:text-white transition-colors mt-1 shrink-0">
                     <Phone size={14} />
                  </div>
                  <span className="group-hover:text-gray-300 transition-colors">+971 55 9662626</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-bst-blue/10 flex items-center justify-center text-bst-blue group-hover:bg-bst-blue group-hover:text-white transition-colors mt-1 shrink-0">
                    <Mail size={14} />
                  </div>
                  <span className="break-all group-hover:text-gray-300 transition-colors">info@bstevent.com</span>
                </li>
                 <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-bst-blue/10 flex items-center justify-center text-bst-blue group-hover:bg-bst-blue group-hover:text-white transition-colors mt-1 shrink-0">
                    <MapPin size={14} />
                  </div>
                  <span className="group-hover:text-gray-300 transition-colors">Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-light">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} BST Events. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;