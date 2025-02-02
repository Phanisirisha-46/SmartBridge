import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutingError from './components/RoutingError';
import Login from './components/Login/Login';
import RootLayout from './RootLayout';
import Home from './components/Home/Home';
import Faq from './components/FAQ/Faq';
import Aboutus from './components/Aboutus/Aboutus';

function App() {
  
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, // The root route
      errorElement: <RoutingError />,
      children: [
        {
          path: '/login', // Child route of Login
          element: <Login />,
        },
        {
          path: '/home', // Child route of Login
          element: <Home/>,
        },
        {
          path: '/faq', // Child route of Login
          element: <Faq/>,
        },
        
        {
          path: '/aboutus', // Child route of Login
          element: <Aboutus/>,
        },
       

        
      ],
    },
  ]);

  return (
    <div>
      <div className='main'>
        <RouterProvider router={browserRouter} />
      </div>
    </div>
  );
}

export default App;
