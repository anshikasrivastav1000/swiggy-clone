import resList  from '../utils/mockData';
import RestaurentCard from './RestaurentCard';
import {useState} from 'react'
const Body =() =>{
const [listOfRestaurent,setlistOfRestaurent] = useState(resList);


    return(
      <div className="body">
        <div className="filter">
           <button className="filter-btn" onClick ={() =>{
           const filteredList = listOfRestaurent.filter((res) => res.info.avgRating > 4.5);
           setlistOfRestaurent(filteredList);
           }}> Top Rated Restaurant</button> 
        </div>
        <div className="seacrh"> Search
          <input type="text" placeholder="Search for restaurant"/>
        </div>
         <div className="res-container">
          {
            listOfRestaurent.map((restaurant,index)=>(
              <RestaurentCard key={index} resData={restaurant}/>
              ))
          }
          
  
         
          </div>
  
      </div>
    );
  };
  export default Body;