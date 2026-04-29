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
        
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Seja Bem-vindo ao <span className="text-[#00796b]">Rota do Boto</span>
        </h1>
        
        <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 max-w-2xl font-medium">
          Sua viagem pelos rios da Amazônia começa aqui!
        </p>

       
      </div>

    </section>
  );
};

export default Recepcao;