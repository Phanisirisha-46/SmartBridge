// import { useState } from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom" ;
// import { Link } from 'react-router-dom';
// import RootLayout from './RootLayout';
import RoutingError from './components/RoutingError'; 
import Login from './components/Login/Login';

function App() {
  
  const browserRouter= createBrowserRouter([
    {
      path:'',
      element:<Login/>,
      errorElement:<RoutingError/>,
      
    // children:[
    //   {
    //     path:'/',
    //     element:<Home/>,
    //   },
      
    // ]
  }
  
  ])
  return (
    <div>
      <div className='main'>
    
        
        <RouterProvider router={browserRouter}/>
  
      </div>
      

    </div>
  )

}

export default App
