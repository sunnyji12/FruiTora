import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Imagecarousel.css';
import sl1 from '../Assets/sl1.png';
import sl2 from '../Assets/sl2.jpg';

import sl4 from '../Assets/sl4.png';
import sl5 from '../Assets/sl5.png';
import sl8 from '../Assets/sl8.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Imagecarousel() {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl5}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl4}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl1}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl5}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl8}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl5}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl4}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl5}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl4}/></div></div></SwiperSlide>
        <SwiperSlide><div className=' h-[35rem]  '><div className='h-[28rem] rounded-xl   '><img className='w-full  rounded-2xl' src={sl5}/></div></div></SwiperSlide>

        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
}