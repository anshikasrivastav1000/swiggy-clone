import { useState } from "react";
import { Link } from "react-router-dom";
import {useOnlineStatus} from '../utils/useOnlineStatus'
const Header = () => {
  const [btnName, setBtnName] = useState("Signin");
const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between  bg-green-100">
      <div className="logo-container">
        <img
          className="w-40"
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
          alt="Logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-4 text-2xl text-black-500">
          <li>
            Online Status : { onlineStatus ? "🟢": "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
         
          <li><Link to="/contact">Contact</Link></li>
        
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>

          <button className="signup-btn"
            onClick={() => {
              btnName === "Sign in"
                ? setBtnName("Sign up")
                : setBtnName("Sign in");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
