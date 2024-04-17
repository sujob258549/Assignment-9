import { createBrowserRouter } from "react-router-dom";
import Root from "../assets/component/root/Root";
import Home from "../assets/component/home/Home";
import Login from "../assets/component/login/Login";
import Register from "../assets/component/register/Register";
import Detail from "../assets/component/detaoil/Detail";
import PrivateRoute from "../assets/component/privaterute/PrivateRoute";
import Location from "../assets/component/location/Location";
import Profile from "../assets/component/profile/Profile";
import Updateprofile from "../assets/component/profile/Updateprofile";
import About from "../assets/component/about/About";
import Errorpage from "../assets/component/errorpage/Errorpage";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
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
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/location',
                element: <Location></Location>
            },
            {
                path: '/updateprofile',
                element: <PrivateRoute><Updateprofile></Updateprofile></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/statatik/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader : ()=> fetch('/fecdata.json')
            }
        ]
    }
])

export default router;