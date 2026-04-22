export default function TravelSearchCard() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0f8f7a] p-8 m-8 rounded-3xl relative">
      
      <div className="mb-6">
        <select className="bg-gray-200 rounded-full px-4 py-2 outline-none">
          <option>Ida e Volta</option>
          <option>Só Ida</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        
        <div className="flex flex-col gap-4">
          
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-3">
            <span className="mr-3">📍</span>
            <input type="text" placeholder="Manaus (MAO)" className="bg-transparent outline-none w-full"/>
          </div>

          <div className="flex items-center bg-gray-200 rounded-full px-4 py-3">
            <span className="mr-3">📍</span>
            <input type="text" placeholder="Escolha seu destino" className="bg-transparent outline-none w-full"/>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-3">
            <span className="mr-3">📅</span>
            <input type="text" placeholder="Selecionar data" className="bg-transparent outline-none w-full"/>
          </div>

          <div className="flex items-center bg-gray-200 rounded-full px-4 py-3">
            <span className="mr-3">👤</span>
            <input type="text" placeholder="Número de pessoas" className="bg-transparent outline-none w-full"/>
          </div>
        </div>

        <button className="absolute left-1/2 top-[38%] -translate-x-1/2 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:scale-110 transition">
          🔄
        </button>

      </div>
    </div>
  );
}