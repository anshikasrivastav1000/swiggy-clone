import {useEffect,useState} from 'react'
import axios from 'axios';

const User = () =>{

    const [userData, setUserData] = useState(null);


    const fetchUserData = async ()=>{
         
        try {
            const user = await axios.get('https://api.github.com/user/150316139');
            // const userData = await user.json();
            setUserData(user.data);
        } catch (error) {
            console.log("Failed to fetch user data")
        }
        
   
          }
            useEffect (()=>{
                fetchUserData()
                    },[]);
                    if(!userData){
                        return <div>Loading......</div>;
                    }
     return(
        <div className="user-card">
            <div className="user-info">
            <img src={userData.avatar_url} alt="user avatar"/>
            <h2>{userData.name}</h2>
            <a href={userData.html_url}>Visit Github Profile</a>
        </div>
        </div>
     )


    }


export default User;