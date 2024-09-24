import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useOnlineStatus } from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [searchText, setsearchText] = useState('');
  const [filterRestaurant, setfilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Please check your internet connection</h1>;

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-6">
      {/* Filter and Search Section */}
      <div className="filter flex justify-end items-center mb-6">
        {/* Search Box */}
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
            onClick={() => {
              const filteredRestaurant = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredList(filteredRestaurant);
            }}
          >
            Search
          </button>

          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
            onClick={() => {
              const filteredList = listOfRestaurent.filter((res) => res.info.avgRating > 4.5);
              setlistOfRestaurent(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filterRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
