import React from 'react';
import homeImage from "../../assets/home.svg";
import classes from "./Home.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Home = () => {

    return (
        <div className={classes.bg}>
            <div className='p-0 m-[0px] min-h-[80vh] w-[100%] flex items-center justify-between flex-col'>
                <div className=' h-[90vh] w-[100%] flex  md:flex-row flex-col'>
                    <div className=' h-[80vh] w-[40%] text-[3.0rem] pl-5 text-black font-bold justify-center items-center flex'>
                        <div className={classes.text}>
                            The largest community of tomorrow's builders.
                        </div>
                    </div>
                    <div className=' h-[80vh] w-[60%] flex justify-center items-center'>
                        <img src={homeImage} className=' h-[90%] w-[90%] object-contain' alt='home image' />
                    </div>
                </div>
                <div className=' h-[60vh] w-[100%] bg-blue-50 flex flex-col'>
                    <div className=' h-[40%] w-[100%] flex justify-center items-center  text-lg font-sans font-bold'>
                        Where our recuriters come from
                    </div>
                    <div className=' h-[60%] w-[100%]'>
                        <Swiper className=' h-[100%] w-[100%] transition-all 150ms'
                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                            slidesPerView={4}
                            loop={true}
                            autoplay={
                                {
                                    delay: 1000,
                                    disableOnInteraction: true,
                                }
                            }

                        // pagination={{ clickable: true }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, el) => {
                                return <SwiperSlide className=' h-[90%] w-[20%] rounded-xl mr-5 bg-red-500'>Slide {el}</SwiperSlide>;
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home