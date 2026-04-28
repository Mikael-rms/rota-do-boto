import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext.jsx";

export default function MobileMenu({ open, setOpen, handleSignOut }) {
  const { user } = useAuth();

  return createPortal(
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-[9998]"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-55 bg-[rgb(21,40,47)] text-white z-[9999] transform transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <div className="flex flex-col p-6 space-y-6">

          <h2 className="text-lg font-semibold">Menu</h2>

          {user ? (
            <>
            <div className="flex flex-col gap-4">
              <Link 
                to="/perfil" 
                onClick={() => setOpen(false)}
                className="hover:text-white/70 transition"
              >
                Perfil
              </Link>

              <div className="flex items-center gap-2 cursor-pointer hover:text-white/70 transition">
                <ShoppingCart size={20} />
                <span>Carrinho</span>
              </div>
            </div>

            <div className="border-t border-white/20" />

            <button
                onClick={() => {
                handleSignOut();
                setOpen(false);
                }}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
                Sair
            </button>

            </>
          ) : (
            <>
              <Link to="/cadastro" className="text-center">Criar conta</Link>
              <Link to="/login" className="bg-white text-center text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">Entrar</Link>
            </>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}