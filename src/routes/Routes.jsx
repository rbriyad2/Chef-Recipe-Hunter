import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import Chef from "../pages/Home/Chef";
import PrivateRoutes from "./PrivateRoutes";
import Accounts from "../pages/Accounts";
import Forget from "../pages/Forget";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Recipes from "../pages/Recipes/Recipes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/forget',
          element: <Forget></Forget>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: ()=> fetch('http://localhost:3000/blogs')
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/chefs',
          element: <Chef></Chef>,
          loader: ()=> fetch('http://localhost:3000/chefs')
        },
        {
          path: '/account',
          element: <PrivateRoutes> <Accounts></Accounts></PrivateRoutes>
        },
        {
          path: '/recipe',
          element: <Recipes></Recipes>,
          loader: ()=> fetch('http://localhost:3000/chefs')
        }
      ]
    },
    
  ]);


  export default router;