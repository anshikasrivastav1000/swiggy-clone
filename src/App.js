
import './index.css';
import resList  from './utils/mockData';

const Header = () =>{
  return(
    <div className = "header">
<div className="logo-container">
  <img className="logo" src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="Logo" />
</div>
<div className="nav-items">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
    <li>Sign Up</li>
  </ul>
  </div>
</div>
   
  );
};
//{THIS IS DESTRUREINHG}
const RestaurantCard = (props) =>{
const {resData} = props;
const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
  return(
    <div className="res-cards">
    <img className='res-logo' src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
  
  <h3>{name}</h3>
  <h4>{cuisines.join(",")}</h4>
  <h3>{avgRating}</h3>
  <h4>{costForTwo}</h4>
    </div>
  );
};



const Body =() =>{
  return(
    <div className="body">
      <div className="seacrh"> Search
        <input type="text" placeholder="Search for restaurant"/>
      </div>
       <div className="res-container">
        {
          resList.map((restaurant,index)=>(
            <RestaurantCard key={index} resData={restaurant}/>
            ))
        }
        

       
        </div>

    </div>
  );
};
function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
    </div>
  );
}

export default App;
