import { useNavigate } from "react-router-dom";

function Resultados() {
  const navigate = useNavigate();

  const viagem = {
    tripId: "lancha123",
    origem: "Manaus",
    destino: "Maués",
    horario: "08:00",
    preco: 120
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">

        <h1 className="text-4xl font-bold text-center text-green-800 mb-6">
          Resultados da sua busca:
        </h1>

        {/* Card de trás */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl flex flex-col gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-8 items-center">

            {/* Imagem */}
            <div className="w-full md:w-64 h-44 bg-gray-200 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
              <img
                src="https://fbi.cults3d.com/uploaders/32338244/illustration-file/f23d00d1-2861-40af-8e83-1e8f5eda7403/WhatsApp-Image-2024-08-27-at-6.36.25-PM.jpeg"
                alt="Embarcação"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

                {/* Embarcação */}
                <div className="flex flex-col justify-center">
                  <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">
                    Embarcação
                  </p>
                  <p className="font-extrabold text-[#00796b] text-xl leading-tight">
                    xxxxxxx - Lancha
                  </p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                    <span>☆ 0,0 (0)</span>
                  </div>

                  {/* Preço */}
                  <p className="text-gray-400 mt-3 font-bold text-sm uppercase">
                    Preço:{" "}
                    <span className="text-[#00796b] text-xl">
                      R$000
                    </span>
                  </p>
                </div>

                {/* Tempo de Viagem */}
                <div className="flex flex-col justify-center sm:text-center border-x-0 sm:border-x border-gray-100">
                  <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">
                    Tempo de Viagem
                  </p>
                  <p className="font-extrabold text-[#00796b] text-3xl">
                    00H
                  </p>
                </div>

                {/* Data de Partida */}
                <div className="flex flex-col justify-center sm:text-center">
                  <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">
                    Data de Partida
                  </p>
                  <p className="font-extrabold text-[#00796b] text-lg">
                    00/00/0000 - 00H
                  </p>
                </div>

              </div>

              {/* Botão de comprar passagem */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() =>
                    navigate("/pedido", { state: viagem })
                  }
                  className="w-full sm:w-auto bg-[#56e39f] hover:bg-[#45cc8b] text-[#004d40] font-bold py-3 px-10 rounded-2xl shadow-md transition-all hover:scale-105 text-base uppercase"
                >
                  Comprar passagem
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultados;  