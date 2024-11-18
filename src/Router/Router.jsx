import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import StartLearning from '../Pages/StartLearning';
import AboutUs from '../Pages/AboutUs';
import Tutorials from '../Pages/Tutorials';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import GoogleLogin from '../Pages/GoogleLogin';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/start learning",
                element:<StartLearning></StartLearning>
            },
            {
                path:"/about us",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/tutorials",
                element:<Tutorials></Tutorials>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/google login",
                element:<GoogleLogin></GoogleLogin>
            },
            
        ]
    }

]);

export default Router;