import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Contact from './components/Contact';

import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import Cart from "./components/Cart";
// import Grocery from './components/Grocery';

//chunking
//lazy loading
//on demand loading
//dynamic loading
//code splitting

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));
const appRouter = createBrowserRouter([
    { path:"/",
        
        element:<App/>,

     children:[
        
        {
            path:"/",
            element:<Body/>,
        },
        { path:"/about",

            element:<Suspense fallback={<h1>hi</h1>}><About/></Suspense>
        },
        { path:"/contact",
            element:<Contact/>
        },
        {
            path:"/grocery",
            element:<Suspense  fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
        },
        //dynamic routes
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/> 
        },
        {
            path:"/cart",
            element:<Cart/> 
        }
     ],
     
    errorElement:<Error/>
    }
   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={appRouter}/>
 
);

