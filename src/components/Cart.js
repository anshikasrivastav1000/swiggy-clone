import ItemsList from "./ItemsList";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="m-4 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
            <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">
                        {cartItems.length > 0 ? `You have ${cartItems.length} items` : "Cart is Empty"}
                    </h2>
                    {cartItems.length > 0 && (
                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-24 w-24 mx-auto mb-4 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h18M9 3v6m6-6v6m-7 8h8M5 16h14M6 16v4m12-4v4"
                            />
                        </svg>
                        <p>Your cart is currently empty.</p>
                    </div>
                ) : (
                    <ItemsList items={cartItems} />
                )}
            </div>
        </div>
    );
};

export default Cart;
