import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StaticSection = () => {
    const [allnews, setAllnews] = useState([]);
    useEffect(() => {
        fetch('/fecdata.json')
            .then(res => res.json())
            .then(data => setAllnews(data))
    }, [])
    return (
        <div className="py-10 md:py-16 lg:py-24">
             <h2 className="text-xl md:text-5xl text-center font-bold">Hospitality quelity </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 md:py-16 ">
          {
                allnews.map(singelNews => (
                    <div data-aos="fade-down"  data-aos-duration="5000" key={singelNews.id} className='border-2 transition pt-5 shadow  rounded-md hover'>
                    
                        <h2 className='text-xl px-5 font-semibold'>{singelNews.estate_title}</h2>
                        <img className='px-5 pt-5' src={singelNews.image} alt="" />
                        <p className=' mb-5 p-5'>{singelNews.description.slice(0,140)}...<Link to={`/statatik/${singelNews.id}`} className='text-xl font-bold text-[#FF8C47]'>Read More</Link></p>
                        <hr />
                        <div className='flex justify-between py-8 px-5'>
                            <div className='flex gap-3'>
                               
                                <p>{singelNews.category}</p>

                            </div>
                            <div className='items-center flex gap-2'>
                                <FaLocationDot className='text-xl '> </FaLocationDot>
                                <p>{singelNews.location}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
    );
};

export default StaticSection;