import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { BRAND_NAME, NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center shadow-md">
                <div className="w-5 h-5 border-4 border-brand-accent rounded-sm"></div>
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-brand-dark uppercase">
                {BRAND_NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-stretch">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 flex items-center text-sm font-bold tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-brand-accent"
                    : "text-slate-600 hover:text-brand-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center ml-6">
              <Link
                to="/contact"
                className="px-6 py-2.5 text-sm font-bold text-brand-dark bg-brand-accent hover:bg-brand-accentHover rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-brand-dark hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full z-50 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-bold ${
                  location.pathname === link.path
                    ? "bg-brand-light text-brand-accent"
                    : "text-slate-600 hover:text-brand-dark hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 text-base font-bold text-brand-dark bg-brand-accent hover:bg-brand-accentHover rounded-lg shadow-sm"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 border-2 border-brand-accent"></div>
              <span className="font-extrabold text-2xl tracking-tighter uppercase">{BRAND_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for rivets, screws, and custom fastening solutions since 2005. Precision engineering for a stronger future.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors cursor-pointer">
                    <span className="text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors cursor-pointer">
                    <span className="text-xs font-bold">fb</span>
                </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              Products
            </h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-sm hover:text-brand-accent transition-colors">Solid Rivets</Link></li>
              <li><Link to="/products" className="text-sm hover:text-brand-accent transition-colors">Hollow Rivets</Link></li>
              <li><Link to="/products" className="text-sm hover:text-brand-accent transition-colors">Double-Cap Rivets</Link></li>
              <li><Link to="/products" className="text-sm hover:text-brand-accent transition-colors">Binding Posts</Link></li>
              <li><Link to="/products" className="text-sm hover:text-brand-accent transition-colors">Eyelets</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm hover:text-brand-accent transition-colors">About Boltin</Link></li>
              <li><Link to="/about" className="text-sm hover:text-brand-accent transition-colors">Factory Tour</Link></li>
              <li><Link to="/solutions" className="text-sm hover:text-brand-accent transition-colors">Industries Served</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">No. 88, Industrial Road<br/>Taichung City, Taiwan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">+886-4-2345-6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">sales@boltin-fasteners.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {BRAND_NAME} Manufacturing Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;