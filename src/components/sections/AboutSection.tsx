

const AboutSection = () => (
       <section id="sobre" className="py-12 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-beige-200 mb-6 text-center font-playfair">
          🥖 Sobre Nós
        </h2>
        
        <div className="space-y-4 text-beige-300 text-lg leading-relaxed">
          <p>
            Desde 2019, a <span className="text-gold-500 font-medium">Padaria Boa Vista</span> vem conquistando 
            o paladar do bairro com:
          </p>
          
          <ul className="space-y-3 list-disc pl-5 marker:text-gold-500">
            <li>
              <span className="font-medium">Pães crocantes</span> saídos do forno a lenha 
              <span className="block text-sm text-beige-400 mt-1">Massas fermentadas naturalmente por 12h</span>
            </li>
            
            <li>
              <span className="font-medium">Bolos que trazem memórias</span> da infância
              <span className="block text-sm text-beige-400 mt-1">Receitas familiares com ingredientes selecionados</span>
            </li>
            
            <li>
              <span className="font-medium">Cafés especiais</span> que despertam os sentidos
              <span className="block text-sm text-beige-400 mt-1">Grãos selecionados do Paraná e Minas Gerais</span>
            </li>
          </ul>
          
          <p className="pt-4 border-t border-beige-800 mt-4">
            🌅 <span className="font-medium">Nosso diferencial:</span> Tudo preparado diariamente com 
            aquele <span className="text-gold-500">cuidado artesanal</span> que só quem ama o que faz pode oferecer.
          </p>
          </div>
      </section>
)

    
export default AboutSection