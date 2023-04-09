import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    // <App />
 
)
