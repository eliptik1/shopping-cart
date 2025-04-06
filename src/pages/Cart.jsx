import { Link } from "react-router-dom";
import CartItem from "../components/ui/CartItem";
import Button from "../components/ui/Button";
import { useCartStore } from "../components/store/cartStore";

function Cart() {
  const { cartProducts } = useCartStore();

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 29.99;
  const total = subtotal + shipping;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-16 max-w-7xl mx-auto w-full">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-8">My Cart</h1>

        {cartProducts.length > 0 ? (
          <div>
            {cartProducts.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty.</p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>

      <div className="lg:col-span-1">
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full">Proceed to Payment</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
