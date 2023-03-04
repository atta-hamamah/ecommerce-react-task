import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function ProductCard({ product }) {
  const [ordered, setOrdered ] = useState(false);
  const {setCartItems} = React.useContext(Context)
  const handleOrder = (e) => {
    setOrdered(true);
    setCartItems(prev=>[...prev , product])
  };

  return (
    <div
      className=" transition-all duration-500 rounded-lg hover:bg-green-200 bg-purple-300
        flex flex-wrap justify-center items-end text-center pt-2 overflow-hidden shadow-lg"
    >
        <div className="pb-2/3 w-full rounded-md">
          <img
            className=" mx-auto object-cover rounded-md h-36"
            src={product.thumbnail}
            alt={product.name}
          />
        </div>
        <div className="p-2">
          <p className="text-lg font-medium text-gray-800/">{product.title}</p>
          <div className=' flex flex-nowrap justify-between items-center text-center'>
            <p className="text-sm font-normal text-red-400 mt-1">
            Disc {product.discountPercentage}%
            </p>
            <p className="text-lg font-semibold text-green-600 mt-2">${product.price}</p>
          </div>
          <div className="mt-4 flex justify-between gap-2">
            <button
              className={
                ordered
                  ? 'w-20 text-center inline-block px-2 py-1 font-medium text-white bg-blue-500 rounded-lg focus:outline-none focus:shadow-outline-gray'
                  : 'w-20 text-center inline-block px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray'
              }
              onClick={()=>{handleOrder()}}
              disabled={ordered}
              whileHover={{ scale: 1.05 }}
            >
              {ordered ? 'Ordered' : 'Order'}
            </button>
            <Link to={`/products/${product.id}`}>
              <button className="w-20 inline-block px-3 py-1 font-medium text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray">
                Details
              </button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
