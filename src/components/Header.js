import { useState ,  useContext} from "react";
import { Link } from "react-router-dom";
import {useOnlineStatus}  from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign in");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
 
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-400 via-green-300 to-green-100 p-4 shadow-lg">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-32 h-32 rounded-full shadow-md border-4 border-green-500"
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
          alt="Logo"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center">
        <ul className="flex gap-8 text-lg font-semibold text-green-900">
          <li>
            <span className="flex items-center">
              Online Status:{" "}
              <span className={`ml-2 ${onlineStatus ? "text-green-700" : "text-red-600"}`}>
                {onlineStatus ? "🟢" : "🔴"}
              </span>
            </span>
          </li>
          <li className="hover:text-green-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-green-600">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      {/* Sign In/Up Button */}
      <div className="flex items-center">
        <button
          className="ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transform transition-transform hover:scale-105"
          onClick={() => {
            setBtnName((prev) => (prev === "Sign in" ? "Sign up" : "Sign in"));
          }}
        >
          {btnName}
        </button>
        <li className="px-4 font-bold">{loggedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
