import { createBrowserRouter } from "react-router-dom";
import Root from "../assets/component/root/Root";
import Home from "../assets/component/home/Home";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;