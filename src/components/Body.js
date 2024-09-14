// import resList  from '../utils/mockData';
import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
const Body =() =>{

const [listOfRestaurent,setlistOfRestaurent] = useState([]);
const [searchText,setsearchText] = useState("")
const [filterRestaurant,setfilteredList ] = useState([])


useEffect(() =>{
  fetchData();
 
},[])
const fetchData = async  () =>{
  const data = await fetch(
   ' https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN'
  )
  const json = await data.json();
  setlistOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};
//conditional rendering
 


    return listOfRestaurent.length === 0 ?  <Shimmer/> :(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) =>{
              setsearchText(e.target.value)
            }}/>
        <button onClick={() => {
        

         
        const filteredRestaurant =  listOfRestaurent.filter(
          (res) =>{

            console.log(res.info.name)
           return res.info.name.toLowerCase().includes(searchText.toLowerCase())
          
         } );
      console.log(filterRestaurant)
      setfilteredList(filteredRestaurant)

        
        }}>
        Search</button>
          </div>

           <button className="filter-btn" onClick ={() =>{
           const filteredList = listOfRestaurent.filter((res) => res.info.avgRating > 4.5);
           setlistOfRestaurent(filteredList);
           }}> Top Rated Restaurant</button> 
        </div>
      
         <div className="res-container">
          {
            filterRestaurant.map((restaurant)=>(
             <Link 
             key={restaurant.info.id}
             to ={"/restaurants/" + restaurant.info.id}><RestaurentCard  resData={restaurant}/></Link> 
              ))
          }
          
  
         
          </div>
  
      </div>
    )
  };

  export default Body;