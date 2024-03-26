import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import BookList from './Pages/BookList';
import PagesToRead from './Pages/PagesToRead';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/BookData.json'),
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
  </React.StrictMode>,
)
