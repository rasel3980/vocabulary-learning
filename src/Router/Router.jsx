import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import StartLearning from '../Pages/StartLearning';
import AboutUs from '../Pages/AboutUs';
import Tutorials from '../Pages/Tutorials';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import GoogleLogin from '../Pages/GoogleLogin';
import LetsLearn from '../Pages/Lessons';
import LessonDetails from '../Components/LessonDetails';
import LessonCard from '../Components/LessonCard';
import Lessons from '../Pages/Lessons';
import LessonList from '../Components/LessonList';
import Profile from '../Pages/Profile';
import PrivateRoute from '../Components/PrivateRoute';

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
                path:"/lesson card",
                element:<LessonCard></LessonCard>,
                
            },
            {
                path:"/lesson",
                element:<Lessons></Lessons>,
                loader:()=>fetch("./Vocabulary.json")
                
            },
            {
                path:"/lesson list",
                element:<LessonList></LessonList>,
                loader:()=>fetch("./Vocabulary.json")
                
            },
            {
                path:"/lesson/:lesson_no",
                element:<PrivateRoute>
                    <LessonDetails></LessonDetails>
                </PrivateRoute>,
                loader: async({params})=>{
                    const res = await fetch("/Vocabulary.json")
                    const data = await res.json()
                    const LessonDetails = data.filter(d=>d.lesson_no == params.lesson_no)
                    return LessonDetails;
                }
            },
            {
                path:"/about us",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/tutorials",
                element:<PrivateRoute>
                    <Tutorials></Tutorials>
                </PrivateRoute>
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
            {
                path:"/profile",
                element:<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            
        ]
    }

]);

export default Router;