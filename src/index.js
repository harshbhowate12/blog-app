import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/home/home';
import BlogView from './views/detailedView/blogView.js';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/blog/:id",
    element:<BlogView/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


