import { useCartStore } from "../store/cartStore";

export const QuantitiyInput = ({
  isCart = false,
  product,
  productId,
  quantity,
  setQuantitiy,
}) => {
  const { incrementProduct, decrementProduct } = useCartStore();
  return (
    <div className="flex items-center bg-gray-50 rounded-xl p-1.5 border border-gray-200 shadow-md gap-1">
      <button
        onClick={() => {
          isCart
            ? decrementProduct(productId)
            : setQuantitiy((quantity) =>
                quantity > 1 ? quantity - 1 : quantity
              );
        }}
        disabled={isCart ? false : quantity <= 1}
        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-white active:scale-95 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-default! group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          />
        </svg>
      </button>

      <span className="w-12 h-10 flex items-center justify-center text-sm font-bold text-gray-900 bg-white rounded-md shadow-inner mx-1 select-none">
        {quantity}
      </span>

      <button
        onClick={() => {
          isCart
            ? incrementProduct(productId)
            : setQuantitiy((quantity) =>
                quantity < product.stock ? quantity + 1 : quantity
              );
        }}
        disabled={isCart ? false : quantity >= product.stock}
        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-white active:scale-95 rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-default! group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};
