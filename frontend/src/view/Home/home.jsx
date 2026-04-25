import TravelSearchCard from './components/TravelSearchCard.jsx'
import CardEmAlta from './components/CardEmAlta.jsx'
import CardViagem from './components/CardViagem.jsx'
import Recepcao from './components/Recepcao.jsx';

const listaCidades = [
  { id: 1, nome: "Manaus", imagem: "/manaus2.jpg" },
  { id: 2, nome: "Parintins", imagem: "/parintins2.jpg" },
  { id: 3, nome: "Tefé", imagem: "/tefe.jpg" },
  { id: 4, nome: "Maués", imagem: "/maues.jpeg" }
];

function Home() {
  return (
    <>
    {/* BACKGROUND */}
    <section className="min-h-screen w-full bg-[linear-gradient(#00000080,#0000004D),url('/bg-home2.jpg')] bg-cover bg-center bg-scroll">
    <div className="relative inset-0 bg-white/35">
    <div className="relative z-50">
    <Recepcao />
    {/* PESQUISA */}
    <TravelSearchCard />
    
    {/* DESTINOS EM ALTA */}
    <div className="p-8 min-h-screen bg-transparent rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Destinos em alta</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {listaCidades.map((cidade) => {
          return (
          <CardEmAlta 
            key={cidade.id} 
            imagem={cidade.imagem} 
            nome={cidade.nome}/>
          );
          })}
      </div>
    </div>

    {/* VIAGENS MAIS PROCURADAS */}
    <section className="p-8 min-h-screen mt-1">
      <h2 className="text-white text-right text-3xl -mt-4 mb-6 font-bold">Viagens mais procuradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 h-[400px] bg-transparent">
        <div className="hidden lg:block lg:row-span-2">
          <CardViagem 
            titulo="Manaus para Tefé"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            preco="R$ 200,00"
            imagem="/tefe.jpg"
          />
        </div>
        <CardViagem titulo="Manaus para Parintins" descricao="Consectetur adipiscing elit." imagem="/manaus2.jpg" />
        <CardViagem titulo="Tabatinga para Manaus" descricao="Consectetur adipiscing elit." imagem="/manaus3.jpg" />
        <CardViagem titulo="Novo Airão para Tefé"  descricao="Consectetur adipiscing elit." imagem="/parintins.jpeg" />
        <CardViagem titulo="Coari para Manaus" descricao="Consectetur adipiscing elit." imagem="/maues.jpeg" />
      </div>
      </section>
    
    </div>
    </div>
    </section>
   </> 
  )
} export default Home