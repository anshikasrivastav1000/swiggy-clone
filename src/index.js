import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from './components/Contact';
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';

const appRouter = createBrowserRouter([
    { path:"/",
        
        element:<App/>,

     children:[
        
        {
            path:"/",
            element:<Body/>,
        },
        { path:"/about",

            element:<About/>
        },
        { path:"/contact",
            element:<Contact/>
        },
        //dynamic routes
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        }
     ],
     
    errorElement:<Error/>
    }
   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={appRouter}/>
 
);

