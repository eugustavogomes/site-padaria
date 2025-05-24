import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-beige-200 p-4 text-center">
      <p>
        Siga-nos no Instagram:{' '}
        <a
          href="https://www.instagram.com/padariaboavistacwb"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold-500"
        >
          @padariaboavistacwb
        </a>
      </p>
      <p>© 2025 Padaria Boa Vista. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;