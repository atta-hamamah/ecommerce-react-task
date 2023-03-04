import React from 'react'
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
function CartIcon() {
  return (


        <div className=' fixed right-0 top-28 flex justify-center items-center w-14 h-14 
            rounded-full p-4 cursor-pointer transition-all duration-100 
          bg-blue-500 hover:border-4 border-2 border-purple-600 hover:border-blue-300 border-solid'
        >
            <Link to={`/cart`}>
                <BsCartCheck className=' text-white text-4xl'/>
            </Link>
        </div>
  )
}

export default CartIcon