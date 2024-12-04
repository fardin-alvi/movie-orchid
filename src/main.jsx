import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Addmovie from './pages/Addmovie.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import Privateroute from './PrivateRoute/Privateroute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: 'addmovie',
    element: <Privateroute>
      <Addmovie />
    </Privateroute>
  },
  {
    path: 'login',
    element:<Login/>
  },
  {
    path: 'register',
    element:<Register/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
