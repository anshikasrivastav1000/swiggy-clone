import {CDN_URL} from '../utils/Constants'
//{THIS IS DESTRUREINHG}
const RestaurentCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
      return(
        <div className="res-cards">
        <img className='res-logo' src={ CDN_URL  + cloudinaryImageId}/>
      
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h3>{avgRating}</h3>
      <h4>{costForTwo}</h4>
        </div>
      );
    };
    export default RestaurentCard;