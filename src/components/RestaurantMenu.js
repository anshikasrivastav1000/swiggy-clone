import {useState,useEffect} from 'react'
import Shimmer from './Shimmer';
import {useParams} from "react-router-dom"

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
console.log(itemCards)


    
    return  (
    
 
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul> {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - {item.card.info.
defaultPrice || item.card.info.price /100
}</li> ))}

             
            </ul>
           
        </div>
    )
}
export default RestaurantMenu;