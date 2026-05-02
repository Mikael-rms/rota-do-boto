import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { useNavigate } from "react-router-dom";

function CadastroForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");

  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");

  const [municipio, setMunicipio] = useState("");

const municipios = [
  "Alvarães", "Amaturá", "Anamã", "Anori", "Apuí", "Atalaia do Norte", "Autazes", 
  "Barcelos", "Barreirinha", "Benjamin Constant", "Beruri", "Boa Vista do Ramos", "Boca do Acre", "Borba", 
  "Caapiranga", "Canutama", "Carauari", "Careiro", "Careiro da Várzea", "Coari", "Codajás", 
  "Eirunepé", "Envira", "Fonte Boa", "Guajará", "Humaitá", "Ipixuna", 
  "Iranduba", "Itacoatiara", "Itamarati", "Itapiranga", "Japurá", "Juruá", "Jutaí", 
  "Lábrea", "Manacapuru", "Manaquiri", "Manaus", "Manicoré", "Maraã", "Maués", 
  "Nhamundá", "Nova Olinda do Norte", "Novo Airão", "Novo Aripuanã", "Parintins", "Pauini", "Presidente Figueiredo", 
  "Rio Preto da Eva", "Santa Isabel do Rio Negro", "Santo Antônio do Içá", "São Gabriel da Cachoeira", 
  "São Paulo de Olivença", "São Sebastião do Uatumã", "Silves", "Tabatinga", "Tapauá", "Tefé",
  "Tonantins", "Uarini", "Urucará", "Urucurituba"
];

  const navigate = useNavigate();

const handleCadastro = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      nome,
      telefone,
      cpf,
      nascimento,
      cep,
      bairro,
      municipio: municipios.includes(municipio) ? municipio : "Município não listado",
      logradouro,
      numero,
      email: user.email
    });

    console.log("Usuário salvo no Firestore");

    navigate("/");
  } catch (error) {
    alert("Erro ao cadastrar usuário: " + error.message);
  }
};
  return (
    <section className="w-full min-h-screen bg-gray-100 py-6 md:py-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 font-sans">

        <div className="border border-gray-300 rounded-[30px] md:rounded-[40px] p-6 md:p-10 shadow-sm bg-white w-full">
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Dados pessoais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nome Completo</label>
                <input type="text" onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Telefone</label>
                <input type="text" onChange={(e) => setTelefone(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">CPF</label>
                <input type="text" onChange={(e) => setCpf(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Data de Nascimento</label>
                <input type="text" onChange={(e) => setNascimento(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
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
                <input type="text" onChange={(e) => setCep(e.target.value)} 
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Bairro</label>
                <input type="text" onChange={(e) => setBairro(e.target.value)} 
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Município</label>
                <select value={municipio} onChange={(e) => setMunicipio(e.target.value)} className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500">
  <option value="">Selecione um município</option>

  {municipios.map((c, index) => (
    <option key={index} value={c}>
      {c}
    </option>
  ))}
</select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Logradouro</label>
                <input type="text" onChange={(e) => setLogradouro(e.target.value)} 
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Numero</label>
                <input type="text" onChange={(e) => setNumero(e.target.value)} 
                className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none focus:border-green-500" />
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