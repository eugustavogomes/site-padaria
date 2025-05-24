import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Título */}
        <div className="flex items-center">
          <span className="navbar-title text-3xl md:text-3xl font-normal text-gold-500 shadow-sm border-gold-500">
            Padaria Boa Vista
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-beige-00 hover:text-gold-500 font-lora text-lg"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-beige-200 hover:text-gold-500 font-lora text-lg"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('o-que-oferecemos')}
            className="text-beige-200 hover:text-gold-500 font-lora text-lg"
          >
            O que Oferecemos
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-beige-200 hover:text-gold-500 font-lora text-lg"
          >
            Contato
          </button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-beige-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark-800">
          <button
            onClick={() => scrollToSection('home')}
            className="block px-4 py-2 text-beige-200 hover:bg-dark-700 hover:text-gold-500 font-lora w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="block px-4 py-2 text-beige-200 hover:bg-dark-700 hover:text-gold-500 font-lora w-full text-left"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('o-que-oferecemos')}
            className="block px-4 py-2 text-beige-200 hover:bg-dark-700 hover:text-gold-500 font-lora w-full text-left"
          >
            O que Oferecemos
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="block px-4 py-2 text-beige-200 hover:bg-dark-700 hover:text-gold-500 font-lora w-full text-left"
          >
            Contato
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;