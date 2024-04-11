import Footer from "../navber/Footer";
import Navber from "../navber/Navber";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
     <div>
           <div className="mx-auto">
           <Navber></Navber>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
           
       
     </div>
    );
};

export default Root;