import {createBrowserRouter} from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home';
import Project1Details from './../pages/Project1Details';
import Project2Details from './../pages/Project2Details';
import Project3Details from './../pages/Project3Details';
import Project4Details from './../pages/Project4Details';
import Project5Details from './../pages/Project5Details';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/project1Details",
          element: <Project1Details></Project1Details>
        },
        {
          path: "/project2Details",
          element: <Project2Details></Project2Details>
        },
        {
          path: "/project3Details",
          element: <Project3Details></Project3Details>
        },
        {
          path: "/project4Details",
          element: <Project4Details></Project4Details>
        },
        {
          path: "/project5Details",
          element: <Project5Details></Project5Details>
        },
      ]
    },
  ]);

export default router;
