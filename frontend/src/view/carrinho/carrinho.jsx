import { useCart } from "../../context/CartContext";

function Carrinho() {
  const { cart, clearCart } = useCart();

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6">Carrinho</h1>

      {cart.seats.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          <p><strong>Viagem:</strong> {cart.tripId}</p>
          <p><strong>Assentos:</strong> {cart.seats.join(", ")}</p>
          <p><strong>Total:</strong> R$ {cart.total}</p>

          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Limpar carrinho
          </button>
        </>
      )}
    </section>
  );
}

export default Carrinho;