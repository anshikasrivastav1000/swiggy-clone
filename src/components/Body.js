// import resList  from '../utils/mockData';
import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import {useOnlineStatus} from '../utils/useOnlineStatus'
const Body =() =>{

const [listOfRestaurent,setlistOfRestaurent] = useState([]);
const [searchText,setsearchText] = useState("")
const [filterRestaurant,setfilteredList ] = useState([]);




useEffect(() =>{
  fetchData();
 
},[])
const fetchData = async  () =>{
  const data = await fetch(
   'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  )
  const json = await data.json();
  console.log(json)
  setlistOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

 const onlineStatus = useOnlineStatus();
 if(onlineStatus === false)
  return <h1>Please check your internet connection</h1>


    return listOfRestaurent.length === 0 ?  <Shimmer/> :(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black rounded-sm" value={searchText} onChange={(e) =>{
              setsearchText(e.target.value)
            }}/>
            </div>
            <div>
        <button className="px-4 py-2 bg-green-100 m-4"
        onClick={() => {
        

         
        const filteredRestaurant =  listOfRestaurent.filter(
          (res) =>{

            console.log(res.info.name)
           return res.info.name.toLowerCase().includes(searchText.toLowerCase())
          
         } );
      console.log(filterRestaurant)
      setfilteredList(filteredRestaurant)

        
        }}>
        Search</button>
          

           <button className="px-4 py-2 bg-green-100" onClick ={() =>{
           const filteredList = listOfRestaurent.filter((res) => res.info.avgRating > 4.5);
           setlistOfRestaurent(filteredList);
           }}> Top Rated Restaurant</button> 
           </div>
        </div>
      
         <div className="flex flex-wrap">
          {
            filterRestaurant.map((restaurant)=>(
             <Link 
             key={restaurant.info.id}
             to ={"/restaurants/" + restaurant.info.id}
        
             
             
             
             ><RestaurentCard  resData={restaurant}/></Link> 
              ))
          }
          
  
         
          </div>
  
      </div>
    )
  };

  export default Body;