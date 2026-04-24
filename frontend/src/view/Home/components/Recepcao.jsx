import React from 'react';

const Recepcao = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-10">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/recepcao.jpeg" 
          alt="Imagem de recepção" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl">
          Seja Bem-vindo ao <span className="text-[#00796b]">Rota do Boto</span>
        </h1>
        
        <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 max-w-2xl font-medium">
          Sua viagem pelos rios da Amazônia começa aqui!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
          
          <a href="#promocoes" className="bg-[#00796b] hover:bg-[#005d52] text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base">
            🔥 Promoções de Viagens
          </a>

          <a href="#destinos" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base">
            📍 Escolher Destino
          </a>

          <a href="#melhores-rotas" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base">
            🚢 Melhores Rotas
          </a>

        </div>
       
      </div>

    </section>
  );
};

export default Recepcao;