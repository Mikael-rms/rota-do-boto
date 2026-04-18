import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function Perfil() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-gray-100 py-6 md:py-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 font-sans">
        
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Perfil
        </h1>

        <div className="border border-gray-300 rounded-[30px] md:rounded-[40px] p-6 md:p-10 shadow-sm bg-white w-full">
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Seus dados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nome Completo:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Telefone:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">CPF:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Data de Nascimento:</label>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">CEP:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Bairro:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Município:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Logradouro:</label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Numero:</label>
              </div>
            </div>

          <div className="flex justify-center w-full mt-6">
            <button className="w-full sm:w-80 bg-[#61EE9D] text-black font-semibold py-3 rounded-xl shadow-md hover:brightness-95 transition-all">
              Editar Dados
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Perfil;