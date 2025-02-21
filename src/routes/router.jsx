import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../signin/SignIn";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                errorElement: <p>Route not found</p>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            }
        ]
    }
])
export default router; 