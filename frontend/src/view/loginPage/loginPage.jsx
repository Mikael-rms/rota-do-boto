function loginPage() {
  return (
    <section className="min-h-screen w-screen bg-[linear-gradient(#00000080,#0000004D),url('/background.jpg')] bg-cover bg-center flex items-center justify-center">
      
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between px-6 gap-10">
        
        <div className="max-w-md text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Seu próximo destino começa aqui
          </h1>

          <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-2lg">
            Gerencie suas viagens e compre passagens em poucos cliques
          </p>
        </div>
        
        <div className="bg-white/70 rounded-2xl shadow-2xl p-8 w-full md:w-[400px]">
          
          <input type="email" placeholder="Digite seu email" className="w-full text-black border border-gray-400 rounded-full px-4 py-2 outline-none mb-6"/>
          <input type="password" placeholder="Digite sua senha" className="w-full text-black border border-gray-400 rounded-full px-4 py-2 outline-none mb-6"/>

          <button className="w-full text-white bg-[rgb(21,40,47)]  font-medium py-2 rounded-lg shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
            Entrar
          </button>

          <p className="text-center text-black text-sm mt-3 cursor-pointer hover:underline">
            CRIAR UMA CONTA
          </p>
        </div>

      </div>

    </section>
  );
}

export default loginPage;