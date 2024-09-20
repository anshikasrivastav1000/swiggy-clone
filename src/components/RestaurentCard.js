import { CDN_URL } from '../utils/Constants';

const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-slate-100 bg-white shadow-lg transition-all duration-300 ease-in-out">
      {/* Restaurant Image */}
      <img 
        className="rounded-lg w-full h-[150px] object-cover mb-3" 
        src={CDN_URL + cloudinaryImageId} 
        alt={name} 
      />
      
      {/* Restaurant Name */}
      <h3 className="font-bold text-lg text-gray-900 mb-2">{name}</h3>
      
      {/* Cuisines */}
      <h4 className="text-sm text-gray-700 mb-2 truncate">
        {cuisines.join(", ")}
      </h4>
      
      {/* Average Rating */}
      <div className="flex items-center mb-2">
        <span 
          className={`font-bold text-sm px-2 py-1 rounded-full ${
            avgRating >= 4 ? 'bg-green-500 text-white' : 'bg-yellow-400 text-black'
          }`}
        >
          ⭐ {avgRating}
        </span>
      </div>
      
      {/* Cost for Two */}
      <h4 className="text-sm text-gray-600">Cost for Two: ₹{costForTwo}</h4>
    </div>
  );
};

export default RestaurentCard;
