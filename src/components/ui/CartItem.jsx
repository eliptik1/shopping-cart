import { useCartStore } from "../store/cartStore";

function CartItem({ title, price, image, quantity, id }) {
  const { incrementProduct, decrementProduct, removeFromCart } = useCartStore();
  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={image || "https://via.placeholder.com/80"}
        alt={title}
        className="w-20 h-20 object-cover rounded mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => decrementProduct(id)}
          className="w-8 h-8 flex items-center justify-center border rounded-l"
        >
          -
        </button>
        <span className="w-10 h-8 flex items-center justify-center border-t border-b">
          {quantity}
        </span>
        <button
          onClick={() => incrementProduct(id)}
          className="w-8 h-8 flex items-center justify-center border rounded-r"
        >
          +
        </button>
      </div>
      <button onClick={() => removeFromCart(id)} className="ml-4 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
