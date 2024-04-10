import { createBrowserRouter } from "react-router-dom";
import Root from "../assets/component/root/Root";
import Home from "../assets/component/home/Home";
import Login from "../assets/component/login/Login";
import Register from "../assets/component/register/Register";
import Detail from "../assets/component/detaoil/Detail";
import PrivateRoute from "../assets/component/privaterute/PrivateRoute";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
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
                path: '/statatik/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader : ()=> fetch('../../public/fecdata.json')
            }
        ]
    }
])

export default router;