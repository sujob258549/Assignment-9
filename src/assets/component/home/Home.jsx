
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import StaticSection from "./StaticSection";


const Home = () => {
    return (
        <div className="w-[90%] mx-auto">
          
            <Helmet>
                <title>Hospitality Service | Home</title>
            </Helmet>
            
            <Slider></Slider>
            <StaticSection></StaticSection>
        </div>
    );
};

export default Home;