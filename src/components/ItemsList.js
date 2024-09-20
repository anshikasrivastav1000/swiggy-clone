import { CDN_URL } from "../utils/Constants";

const ItemsList = ({ items }) => {
//   console.log(items);
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 bg-white rounded-md shadow-md hover:bg-gray-50 transition duration-300 ease-in-out border-b border-gray-200 flex items-center justify-between"
        >
          {/* Item Details */}
          <div className="py-2 flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-gray-600">
              <span className="text-gray-700 font-bold">
                ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </span>
            </p>
            {item.card.info.description && (
              <p className="text-gray-500 mt-2 text-sm">
                {item.card.info.description}
              </p>
            )}
          </div>

          {/* Image with Button Overlay */}
          <div className="relative w-28 h-28">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-md"
            />
            {/* Button Overlay */}
            <button className="absolute inset-0 bg-black bg-opacity-50 text-white text-sm font-semibold flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
