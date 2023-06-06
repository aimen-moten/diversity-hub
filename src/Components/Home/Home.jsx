import React from 'react';
import homeImage from "../../assets/home.svg";
import classes from "./Home.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import "./Home.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import googleImage from "../../assets/google.svg"
import amazonImage from "../../assets/amazon.svg"
import atImage from "../../assets/at&t.svg"
import ebayImage from "../../assets/ebay.svg"
import facebookImage from "../../assets/facebook.svg"
import microsoftImage from "../../assets/microsoft.svg"
import uberImage from "../../assets/uber.svg"
import udemyImage from "../../assets/udemy.svg"
import walmartImage from "../../assets/walmart.svg"

const dataJson=[
    {
        'id':1,
        "name":"Google",
        "coverImage":googleImage
    },
    {
        'id':2,
        "name":"Facebook",
        "coverImage":facebookImage
    },
    {
        'id':3,
        'name':"Amazon",
        "coverImage":amazonImage
    },
    {
        'id':4,
        'name':"AT&T",
        "coverImage":atImage
    },
    {
        'id':5,
        'name':"Ebay",
        "coverImage":ebayImage
    },
    {
        'id':6,
        'name':"Microsoft",
        "coverImage":microsoftImage
    },
    {
        'id':7,
        'name':"Uber",
        "coverImage":uberImage
    },
    {
        'id':8,
        'name':"Udemy",
        "coverImage":udemyImage
    },
    {
        'id':9,
        'name':"Walmart",
        "coverImage":walmartImage
    }
]



const Home = () => {
    return (
        <div className={classes.bg}>
            <div className='p-0 m-[0px] min-h-[80vh] w-[100%] flex items-center justify-between flex-col bg-whitish-purple'>
                <div className=' h-[90vh] w-[100%] flex  md:flex-row flex-col'>
                    <div className=' h-[80vh] w-[90%] md:w-[40%] text-[3.0rem] pl-5 text-black font-bold justify-center items-center flex '>
                        <div className={classes.text}>
                            The largest community of tomorrow's builders.
                        </div>
                    </div>
                    <div className=' h-[80vh] w-[100%] md:w-[60%] flex justify-center items-center'>
                        <img src={homeImage} className=' h-[90%] w-[95%] object-contain' alt='home image' />
                    </div>
                </div>

                <div className=' h-[60vh] w-[100%] bg-light-blueXlavender flex flex-col'>
                    <div className=' h-[40%] w-[100%] flex justify-center items-center  font-bold text-5xl'>
                        Where our recuriters come from
                    </div>
                    <div className=' h-[60%] w-[100%]'>
                        <Swiper className=' h-[100%] w-[100%] transition-all 150ms'
               
                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                            slidesPerView={3}
                            loop={true}
                            autoplay={
                                {
                                    delay: 1000,
                                    disableOnInteraction: true,
                                }
                            }

                        // pagination={{ clickable: true }}
                        >
                            {dataJson.map((item) => {
                                return <SwiperSlide key={item.id} className=' h-[60%] md:h-[90%] w-[80%]  md:w-[20%] rounded-xl mr-5 bg-white'>
                                <div className=' h-[80%] w-[100%] flex justify-center items-center'>
                                    <img src={item.coverImage} alt={item.name} className=' h-[90%] w-[90%] object-contain'/>
                                </div>
                                <p className=' text-xl font-bold h-[20%] w-[100%] flex justify-center items-center'>{item.name}</p>
                                </SwiperSlide>;
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home