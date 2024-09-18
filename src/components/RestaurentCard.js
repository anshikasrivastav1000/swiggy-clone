import {CDN_URL} from '../utils/Constants'
//{THIS IS DESTRUREINHG}
const RestaurentCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
      return(
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-slate-300 bg-gray-200 h-[500]">
        <img className='rounded-lg' src={ CDN_URL  + cloudinaryImageId}/>
      
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      <h4>{costForTwo}</h4>
        </div>
      );
    };
    export default RestaurentCard;