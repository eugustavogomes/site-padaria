

const HeroSection = () => (
  <section
    id="home"
    className="relative bg-dark-700 py-20 text-center bg-cover"
    style={{ 
      backgroundImage: `url('images/fachada.png')`,
      backgroundPosition: 'center 60%' 
    }}
  >
    {/* Sobreposição com opacidade */}
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="relative z-10">
      <img
        src="images/logo-padaria.png"
        alt="Padaria Boa Vista Logo"
        className="mx-auto h-40 mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-beige-200 font-playfair">
        Padaria Boa Vista
      </h1>
      <p className="text-lg md:text-xl text-beige-300 mt-2">
        Sabores artesanais que aquecem o coração!
      </p>
    </div>
  </section>
);

export default HeroSection;


