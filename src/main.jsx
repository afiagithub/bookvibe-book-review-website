import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import BookList from './Pages/BookList';
import PagesToRead from './Pages/PagesToRead';
import Home from './Pages/Home';
import BookDetails from './Pages/BookDetails';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../BookData.json'),
      },
      {
        path: "/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../BookData.json'),
      },
      {
        path: "/books",
        element: <BookList></BookList>,        
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>
      },
    ]
  }  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
