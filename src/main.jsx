import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Error from './Components/Error/Error';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllSport from './Pages/AllSport/AllSport';
import AddSport from './Pages/AddSport/AddSport';
import MyList from './Pages/MyList/MyList';
import Home from './Pages/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Router/PrivateRoute';
import Update from './Pages/Update/Update';
import ViewPage from './Pages/ViewPage/ViewPage';
import Challenges from './Pages/Home/Challenges';
import CountryCard from './Pages/Home/CountryCard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allTouristsSpot',
        element:<AllSport></AllSport>
      },
      {
        path:'/addTouristsSpot',
        element:<PrivateRoute><AddSport></AddSport></PrivateRoute>
      },
      {
        path:'/myList',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
        
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/addSpots/${params.id}`)
        
      },
      {
        path:'/viewPage/:id',
        element:<PrivateRoute><ViewPage></ViewPage></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/addSpots/${params.id}`)
      },
     {
      path:'/challenge/:id',
      element:<CountryCard></CountryCard>,
      loader:({params}) => fetch(`http://localhost:5000/challenge/${params.id}`)

     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
