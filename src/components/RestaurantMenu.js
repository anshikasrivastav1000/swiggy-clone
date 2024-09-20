import {useState,useEffect} from 'react'
import Shimmer from './Shimmer';
import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu =() =>{

  const [resInfo,setResInfo]=useState(null);
  const {resId} = useParams();

  useEffect(() =>{
    fetchMenu();
        },[]);


const fetchMenu = async () =>{
const data = await fetch(
   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId="+ resId+"&catalog_qa=undefined&submitAction=ENTER"
);
const json = await data.json();
console.log(json);
setResInfo(json.data)
};



if(resInfo === null) return <Shimmer/> 
//destrutering
const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
(c) => c.card?.card?.["@type"] ===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    
    return  (
    
 
        <div className="text-center">
            <h1 className="font-bold my-6 text-4xl">{name}</h1>
            <h2 className="font-bold text-2xl">{cuisines.join(", ")} - {costForTwoMessage}</h2>
          {/* categories acc*/}
          {categories.map((category)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>)}
           
           
        </div>
    )
}
export default RestaurantMenu;