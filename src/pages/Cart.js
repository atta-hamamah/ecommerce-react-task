import React, { useContext } from 'react';
import { Context } from '../Context';

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);

  function handleRemoveItem(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  function handleSubmitOrder() {
    // submit the order
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Cart</h2>
      <div className="flex flex-col">
        {cartItems.length === 0 && (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center mb-2">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 ml-4">
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="ml-4 rounded-lg bg-red-500 text-white p-1"
            >
              Remove
            </button>
          </div>
        ))}
        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={handleClearCart} className="text-red-500 p-1 rounded-lg bg-slate-200">
                Clear Cart
              </button>
              <button onClick={handleSubmitOrder} className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
