import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Createjob from "../Pages/Createjob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdatedJob from "../Pages/UpdatedJob";
import Login from "../Pages/login";
import Signup from "../Pages/signUp";
import Dashboard from "../Pages/dashboard";
import Profile from "../Pages/profile";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/> },
        {
          path: "/post-job",
          element: <Createjob/>
        },

        {
          path: "/my-job",
          element: <MyJobs/>
        },

        {
          path: "/salary",
          element: <SalaryPage/>
        },

        {
          path: "/edit-job/:id",
          element: <UpdatedJob/>,
          loader:({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },

      
 
      ],
    },
 {
   path: "/",
   element: <Dashboard />,
   children: [
     {
       path: "/profile",
       element: <Profile />
     },
   ],
 },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
      
  ]);
  
  export default router;