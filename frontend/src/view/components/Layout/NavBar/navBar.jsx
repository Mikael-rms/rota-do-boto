import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebaseConfig.js";

import { useState } from "react";
import MenuLateral from "./menuLateral.jsx";
import Hamburger from "./hamburger.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();
  const handleSignOut = () => {
    signOut(auth)
  } 

  return (
    <>
    <div className="w-full bg-[rgb(21,40,47)] px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-2 px-4">
        <Link to="/" className="text-white text-3xl cursor-pointer transition-transform duration-200 hover:scale-105">🐬</Link>
      </div>

      <div className="flex-1 mx-6 max-w-xl relative">
        <input
          type="text"
          placeholder=""
          className="w-full rounded-full py-2 px-4 pr-10 outline-none"
        />

      </div>

      <div className="hidden md:flex items-center gap-4 px-4">

      {user ? (
        //user logado
        <>
            <ShoppingCart className="text-white/55 cursor-pointer" size={22} />
            
            <Link to="/perfil" className="text-white text-sm">
              Perfil
            </Link>

            <button onClick={handleSignOut}
            className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
              Sair
            </button>
        </>
        ) : (
          //user nao logado
          <>
            <Link to="/cadastro" className="text-white cursor-pointer text-sm">
              Criar conta
            </Link>

            <Link to="/login" className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105">
              Entrar
            </Link>
          </>
        )}

      </div>

            <div className="md:hidden">
          <Hamburger open={open} setOpen={setOpen} />
      </div>

          
    </div>
<MenuLateral open={open} setOpen={setOpen} handleSignOut={handleSignOut} />
    </>
  );
}