import {createBrowserRouter} from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home';
import Project1Details from './../pages/Project1Details';
import Project2Details from './../pages/Project2Details';
import Project3Details from './../pages/Project3Details';

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
      ]
    },
  ]);

export default router;
