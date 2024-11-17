import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import StartLearning from '../Pages/StartLearning';
import AboutUs from '../Pages/AboutUs';
import Tutorials from '../Pages/Tutorials';

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
            
        ]
    }

]);

export default Router;