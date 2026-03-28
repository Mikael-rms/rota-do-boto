import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full  bg-[#0f8f7a] px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-2 px-4">
        <span className="text-white text-3xl cursor-pointer transition-transform duration-200 hover:scale-105">🐬</span>
      </div>

      <div className="flex-1 mx-6 max-w-xl relative">
        <input
          type="text"
          placeholder=""
          className="w-full rounded-full py-2 px-4 pr-10 outline-none"
        />

      </div>


      <div className="flex items-center gap-4 px-4">
        
        <ShoppingCart className="text-black cursor-pointer" size={22} />

        <span className="text-white cursor-pointer text-sm">
          Criar conta
        </span>

        <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105">
          Entrar
        </button>
      </div>
    </div>
  );
}