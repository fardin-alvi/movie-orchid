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
import Allmovie from './pages/Allmovie.jsx';
import Moviedetails from './component/Moviedetails.jsx';
import Myfavorites from './pages/Myfavorites.jsx';
import Errorpage from './component/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Errorpage/>,
    loader: () => fetch('http://localhost:4000/movies')
  },
  {
    path: 'addmovie',
    element: <Privateroute>
      <Addmovie />
    </Privateroute>
  },
  {
    path: 'allmovie',
    element: <Allmovie />,
    loader: () => fetch('http://localhost:4000/movies')
  },
  {
    path: '/movies/:id',
    element: <Privateroute>
      <Moviedetails />
    </Privateroute>,
    loader: ({ params }) => fetch(`http://localhost:4000/movies/${params.id}`)
  },
  {
    path: '/myfav',
    element: <Privateroute>
      <Myfavorites/>
    </Privateroute>,
    loader: () => fetch('http://localhost:4000/favoritemovie')
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
