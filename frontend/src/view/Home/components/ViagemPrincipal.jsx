import { Link } from "react-router-dom";

function ViagemPrincipal( { titulo, descricao, preco, imagem, rota } ) {
    return (
        <div className="relative overflow-hidden w-full h-full group shadow-md">
        <Link to={rota}>
            
      <img 
        src={imagem} 
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
        alt={titulo}
      />
        </Link>
        </div>
    )

} 
export default ViagemPrincipal;