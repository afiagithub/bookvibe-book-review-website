import MainLayout from '../Layouts/MainLayout';
import BookList from '../Pages/BookList';
import PagesToRead from '../Pages/PagesToRead';
import Home from '../Pages/Home';
import BookDetails from '../Pages/BookDetails';
import ErrorPage from '../Pages/ErrorPage';
import AboutUs from '../Pages/AboutUs';
import PricingPage from '../Pages/PricingPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('./BookData.json'),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/pricing",
        element: <PricingPage></PricingPage>,
        loader: () => fetch('./PriceData.json')
      },
      {
        path: "/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('./BookData.json'),
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