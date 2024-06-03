/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
const ProductCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  //   console.log(props.item);
  const { description, title, thumbnail, price, rating } = item;

  console.log(description, title, thumbnail, price, rating);

  return (
    <div className="bg-gray-100 p-8 rounded-md m-2 w-64 relative cursor-pointer hover:scale-105 hover:bg-gray-200 duration-150">
      <img src={thumbnail} alt={title} className="mb-2" />
      <h2 className="font-semibold mb-2 text-gray-700">{title}</h2>
      <p className="text-gray-700 line-clamp-2 mb-2">{description}</p>
      <p className="font-semibold mb-2">${price}</p>

      <div className="absolute top-0 right-0 bg-green-700 text-white px-2 py-1 flex gap-1 items-center">
        <FaStar />
        <p className="text-sm">{rating}</p>
      </div>

      <div className="flex justify-between">
        <button className="border border-sm rounded-sm border-slate-600 border-1 px-3 py-2 font-medium hover:bg-blue-700 duration-200 hover:text-white text-sm">
          Wishlist
        </button>

        <button className="border border-sm rounded-sm border-slate-600 border-1 px-3 py-2 font-medium hover:bg-green-700 duration-200 hover:text-white text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
