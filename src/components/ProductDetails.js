import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import {ThreeDots} from "react-loader-spinner";

function ProductDetails() {
  const { id } = useParams();
  const { product, setProduct } = React.useContext(Context);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots type="Puff" color="#c050d5" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="p-1 text-center mt-3 rounded-lg shadow-md bg-gradient-to-br from-red-300 via-purple-600 to-blue-500">
      <h2 className="text-2xl text-gray-800 font-bold mb-4">{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className=" w-full max-w-md  object-contain rounded-lg shadow-md mx-auto mb-4"
      />
      <div className=' flex flex-wrap text-center items-center justify-center gap-2'>
        <p className="text-gray-800 p-1 bg-gradient-to-br from-yellow-300 via-blue-300 w-full to-red-400 product-details rounded-full mb-2 font-bold ">{product.description}</p>
        <p className="text-white font-semibold text-lg border border-red-100 border-solid rounded-md px-1">Price: ${product.price}</p>
        <p className="text-white font-semibold text-lg border border-red-100 border-solid rounded-md px-1">Disc: {product.discountPercentage} %</p>
        <p className="text-white font-semibold text-lg border border-red-100 border-solid rounded-md px-1">Brand: {product.brand}</p>
        <p className="text-white font-semibold text-lg border border-red-100 border-solid rounded-md px-1">Rating: {product.rating}</p>
        <p className="text-white font-semibold text-lg border border-red-100 border-solid rounded-md px-1">category: {product.category}</p>
      </div>
    </div>
  )
}

export default ProductDetails;
