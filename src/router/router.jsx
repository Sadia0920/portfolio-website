import {createBrowserRouter} from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home';
import AboutMe from './../pages/AboutMe';
import ContactMe from './../pages/ContactMe';
import Skills from './../pages/Skills';
import Education from './../pages/Education';
import Projects from './../pages/Projects';

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
            path:"/aboutMe",
            element: <AboutMe></AboutMe>
        },
        {
            path:"/contactMe",
            element: <ContactMe></ContactMe>
        },
        {
            path:"/skills",
            element: <Skills></Skills>,
            loader:() => fetch('../skills.json')
        },
        {
            path:"/education",
            element: <Education></Education>
        },
        {
            path:"/projects",
            element: <Projects></Projects>
        },
      ]
    },
  ]);

export default router;
