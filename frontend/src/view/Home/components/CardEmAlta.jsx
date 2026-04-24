export default function CardEmAlta({ imagem, nome }) {
 return (
  
   <div className="relative overflow-hidden h-64 w-full group shadow-lg border border-white/10 bg-transparent">
     <img 
       src={imagem} 
        alt={nome} 
        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-107" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="absolute inset-0 flex items-end p-6">
        <h3 className="text-white text-2xl font-bold italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2">{nome}</h3>
    </div>
    </div>
  );
}