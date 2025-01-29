import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutingError from './components/RoutingError';
import Login from './components/Login/Login';
import RootLayout from './RootLayout';
import Home from './components/Home/Home';

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
