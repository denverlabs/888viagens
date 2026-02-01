import { useState } from 'react';
import { navLinks, whatsappNumber, whatsappMessage } from '../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4F3EE]/95 backdrop-blur-md border-b border-[#B1ADA1]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-xl font-bold text-[#C15F3C]">888</span>
            <span className="text-xl font-semibold text-[#1A1917]">Viagens</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B6860] hover:text-[#1A1917] font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C15F3C] hover:bg-[#A84E30] text-white font-medium px-5 py-2 rounded-full transition-colors text-sm"
            >
              Criar alerta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#6B6860]"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#B1ADA1]/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#6B6860] hover:text-[#1A1917] font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C15F3C] text-white font-medium px-6 py-3 rounded-full text-center mt-2"
              >
                Criar alerta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
