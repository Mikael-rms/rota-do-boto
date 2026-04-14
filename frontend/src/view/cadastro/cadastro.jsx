import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

function CadastroForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, email, senha);
    console.log("Usuário cadastrado:", user.user);
    navigate("/");

  } catch (error) {
    alert("Erro ao cadastrar usuário: " + error.message);
  };
  };
  return (
    <section className="w-full min-h-screen bg-gray-100 py-6 md:py-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 font-sans">
        
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Cadastro
        </h1>

        <div className="border border-gray-300 rounded-[30px] md:rounded-[40px] p-6 md:p-10 shadow-sm bg-white w-full">
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Dados pessoais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nome Completo</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Telefone</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">CPF</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Data de Nascimento</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Dados de acesso</h2>
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Seu Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} 
              className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Senha</label>
                <input type="password" onChange={(e) => setSenha(e.target.value)} 
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Endereço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">CEP</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Bairro</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Cidade</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Logradouro</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Numero</label>
                <input type="text" className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button onClick={handleCadastro}
            className="w-full sm:w-80 bg-[#61EE9D] text-black font-semibold py-3 rounded-xl shadow-md hover:brightness-95 transition-all">
              Registrar
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CadastroForm;