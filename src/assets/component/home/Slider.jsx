
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { IoIosContact } from 'react-icons/io';


const Slider = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='slider7'>
                   <div className=''>
                   <div className=' w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2  className='text-3xl md:text-5xl font-bold text-white'>Sujon Guesthouses Rangpur</h2>
                        <p style={{textShadow:"1px 1px 10px #fff"}} className='py-10 text-black'>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional</p>
                        <button className='btn text-white bg-[#400f0fd9] hover:text-black'> <IoIosContact className='text-2xl'></IoIosContact>  Contact Us</button>
                    </div>
                    </div>
                    </SwiperSlide>
                <SwiperSlide className='slider5 hero-overlay opacity-70'>
                    <div className=' w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2 className='text-3xl md:text-5xl font-bold text-black'>Hotel Metu Rangpur</h2>
                        <p className='py-8  text-black'>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional</p>
                        <button className='btn text-white bg-[#400f0fd9] hover:text-black'> <IoIosContact className='text-2xl'></IoIosContact>  Contact Us</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slider6'>
                    <div className=' w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white'>Sujon Guesthouses Rangpur</h2>
                        <p className='py-10 text-white'>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional</p>
                        <button className='btn text-white bg-[#400f0fd9] hover:text-black'> <IoIosContact className='text-2xl'></IoIosContact>  Contact Us</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider4'>
                    <div className='w-full px-5 md:px-10 md:w-[70%] mx-auto text-center'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white'>Sujon Guesthouses Rangpur</h2>
                        <p className='py-10 text-white'>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional</p>
                        <button className='btn text-white bg-[#400f0fd9] hover:text-black'> <IoIosContact className='text-2xl'></IoIosContact>  Contact Us</button>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='slider5'>Slide 5</SwiperSlide>
                <SwiperSlide className='slider6'>Slide 6</SwiperSlide>
                <SwiperSlide className='slider7'>Slide 7</SwiperSlide>
                <SwiperSlide className='slider8'>Slide 8</SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Slider;