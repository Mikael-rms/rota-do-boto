import React, { useState } from 'react';
import { User, FileText, CreditCard, Calendar, Phone, MapPin, LogOut, Ticket } from 'lucide-react';
import CampoEntrada from './CampoEntrada';
import ItemMenu from './ItemMenu';


const PaginaPerfil = () => {
  const [abaAtiva, setAbaAtiva] = useState('perfil');
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 flex items-start justify-start w-full">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 ml-0">
        
        {/* Menu lateral */}
        <aside className="w-full md:w-64 bg-white border border-gray-100 rounded-lg shadow-sm h-fit overflow-hidden">
          <ItemMenu 
            icone={User} 
            texto="Meu Perfil" 
            ativo={abaAtiva === 'perfil'} 
            aoClicar={() => setAbaAtiva('perfil')} 
          />
          <ItemMenu 
            icone={FileText} 
            texto="Meus Pedidos" 
            ativo={abaAtiva === 'pedidos'} 
            aoClicar={() => setAbaAtiva('pedidos')} 
          />
          <ItemMenu 
              icone={LogOut} 
              texto="Sair" 
              ativo={abaAtiva === 'sair'} 
              aoClicar={() => setAbaAtiva('sair')} 
            />
        </aside>

       <main className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden text-left">

        <div className="p-8 pt-4">
            {abaAtiva === 'perfil' && (
        <div className="flex flex-col gap-10">
        
        {/* Dados pessoais */}
        <section>
         <div className="px-8 pt-8 pb-4 text-left">
            <h1 className="text-sky-500 text-2xl font-bold mb-4 text-left">Dados pessoais</h1>
            <hr className="border-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <CampoEntrada rotulo="Nome" icone={User} placeholder="Digite seu nome completo" />
            <CampoEntrada rotulo="CPF" icone={CreditCard} placeholder="Digite o seu cpf" />
            <CampoEntrada rotulo="Data de Nascimento" icone={Calendar} placeholder="Data de Nascimento" />
            <CampoEntrada rotulo="Telefone" icone={Phone} placeholder="Digite o seu numero de telefone" />
          </div>
        </section>

        {/* Endereço */}
        <section>
          <div className="px-8 pt-8 pb-4 text-left">
            <h1 className="text-sky-500 text-2xl font-bold mb-4 text-left">Endereço</h1>
            <hr className="border-gray-200" />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <CampoEntrada rotulo="CEP" placeholder="Digite o seu cep" />
           
            <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-xs font-semibold uppercase">Município</label>
             <select className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 outline-none focus:border-sky-500 bg-white cursor-pointer">
             <option value="">Selecione seu município</option>
        
             {municipios.sort().map((cidade, index) => (
            <option key={index} value={cidade}>{cidade} </option>
             ))}
             </select>
            </div>
            
            <CampoEntrada rotulo="Bairro" placeholder="Digite o seu bairro" />
            <CampoEntrada rotulo="Logradouro" placeholder="Digite o seu logradouro" />
            <CampoEntrada rotulo="Número" placeholder="Digite o seu número" />
          </div>
        </section>

      </div>
    )}
  </div>
          {/* Aba - Pedidos */}
          {abaAtiva === 'pedidos' && (
            <div className="text-center py-20 animate-in slide-in-from-bottom-4 duration-500">
              <Ticket size={48} className="mx-auto text-gray-200 mb-4" />
              <h2 className="text-gray-400 italic">Você ainda não possui pedidos realizados.</h2>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default PaginaPerfil;