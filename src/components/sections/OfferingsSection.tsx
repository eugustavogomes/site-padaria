
import offerings  from '../../data/offerings';

const OfferingsSection = () => (
  <section id="o-que-oferecemos" className="py-12 max-w-4xl mx-auto px-4 bg-dark-800 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-beige-200 mb-6 font-playfair text-center">
          🧁 Nossas Delícias
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-beige-300 text-lg mb-2">
            Desfrute de uma experiência gastronômica única com produtos feitos para encantar seu paladar.
          </p>
          
          <div className="inline-flex items-center bg-dark-700 px-4 py-2 rounded-full text-sm">
            ⏰ <span className="ml-2 font-medium">Horário de Funcionamento:</span>
            <span className="ml-2">
              Seg-Sáb: 7h-19h30 | Dom: 8h-19h
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <div key={item.category} className="bg-dark-700 p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-beige-200">{item.category}</h3>
              <p className="text-beige-300 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Botões centralizados após os cartões */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://wa.me/5541995751004?text=Quero%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-dark-900 py-2 px-4 rounded hover:bg-gold-600"
          >
            Fazer Pedido
          </a>
          <a
            href="https://www.ifood.com.br/delivery/curitiba-pr/padaria-boa-vista-loup-padaria-bacacheri/f7550891-4baf-4356-89c0-0d36998576c0?utm_medium=ReserveGoogle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-900 text-beige-200 py-2 px-4 rounded hover:bg-dark-700"
          >
            Ver Cardápio
          </a>
        </div>
      </section>

);

export default OfferingsSection;