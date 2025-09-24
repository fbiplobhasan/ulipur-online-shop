/* eslint-disable react/prop-types */
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Card = ({ product }) => {
  const { name, image, price, category, description } = product;

  return (
    <div className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col justify-between h-48">
        <h2 className="text-lg font-semibold text-blue-600 line-clamp-1">{name}</h2>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {description || "No description available"}
        </p>

        {/* Price + Buttons */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">${price}</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-red-500 text-red-500 hover:text-white transition">
              <FaHeart />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 text-blue-500 hover:text-white transition">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
