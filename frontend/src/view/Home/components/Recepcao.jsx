import React from 'react';
import TravelCard from './TravelSearchCard';

const Recepcao = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center overflow-hidden py-10">
      
      {/* Background e Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/recepcao.jpeg" 
          alt="Imagem de recepção" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 
          Ajuste de Padding Top (pt):
          - pt-48: Empurra o título mais para baixo do que o anterior.
      */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center pt-48">
        
        {/* Título Principal */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-2">
          Seja Bem-vindo ao <span className="text-[#00796b]">Rota do Boto</span>
        </h1>

        {/* Subtítulo H2 - Aumentando o mb para descer o card */}
<h2 className="text-gray-200 text-lg sm:text-2xl md:text-3xl mt-4 mb-44 max-w-3xl font-medium drop-shadow-md">
  Sua viagem pelos rios da Amazônia começa aqui!
</h2>

        <TravelCard />
      </div>
    </section>
  );
};

export default Recepcao;