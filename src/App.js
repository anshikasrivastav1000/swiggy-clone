
import './index.css';

import Header from './components/Header';

import Body from "./components/Body";

import { Outlet } from "react-router-dom";
import {useEffect,useState} from "react";
import UserContext  from "./utils/UserContext";





function App() {
const [userName,setUserName] = useState();

  useEffect(() => {
    const data = {
      name :"Anshika srivastav"
    };
    setUserName(data.name);
  },[])
  
  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="App">
     <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
