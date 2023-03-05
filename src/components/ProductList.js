import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CartIcon from './CartIcon';
import { Context } from '../Context';
import {ThreeDots} from "react-loader-spinner";
import {BsFillCaretRightFill,BsFillCaretDownFill } from 'react-icons/bs';

function ProductList() {
  const { products, setProducts } = React.useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(res => res.slice(0, 6))
      .then(res => setCategories(res));
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setProducts(res.products));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory ? 
    products.filter(product => product.category === selectedCategory) :
    products;

    if (!products) {
      return (
        <div className="flex justify-center items-center h-screen">
          <ThreeDots type="Puff" color="#c050d5" height={100} width={100} />
        </div>
      );
    }

  return (
    <div className=" flex flex-col sm:grid sm:grid-cols-1 gap-1 sm:flex-row sm:justify-between h-full">
      <div className=" fixed left-3 top-13 sm:w-1/4 ">
        <button
            className=" bg-blue-500 flex box-border justify-center items-center flex-nowrap text-white font-bold transition-all duration-100
             px-4 rounded-full border-2 border-purple-600 hover:border-blue-300 border-solid"
            onClick={() => setShowProducts(!showProducts)}
          >
            Categories
            <BsFillCaretRightFill className={` transition-all duration-200 mt-1 ml-1 ${showProducts?`rotate-90`:''}`}/>
        </button>
          {showProducts && (
            <ul className='text-white mt-1 transition-all duration-300 bg-blue-500 rounded-lg p-2'>
            {categories.map(category => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-green-400 ${
                  category === selectedCategory ? `font-bold` : ''
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex gap-2 flex-col sm:grid sm:grid-cols-3">
        <CartIcon />
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
