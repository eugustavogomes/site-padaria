
import Map from '../Map';

const ContactSection = () => (
  <section id="contato" className="py-12 max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-semibold text-beige-200 mb-4">Contato</h2>
    <p className="text-beige-300 mb-2">Avenida Paraná, 3059 - loja 20 - Boa Vista, Curitiba, Brazil 82510-000</p>
    <p className="text-beige-300 mb-2">Telefone: (41) 99575-1004</p>

    {/* Mapa Integrado */}
    <div className="my-6">
      <Map />
    </div>

    <div className="flex justify-center">
      <a
        href="https://wa.me/41995751004"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold-500 text-dark-900 py-2 px-4 rounded hover:bg-gold-600"
      >
        Fale pelo WhatsApp
      </a>
    </div>
  </section>
);

export default ContactSection;