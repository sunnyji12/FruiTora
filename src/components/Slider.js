import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Slider.css';
import sl1 from '../Assets/sl1.jpg'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SliderCard from './SliderCard';


export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <SliderCard img={sl1} productName="Strawberry" price="20"  />
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
           <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard/>
        </SwiperSlide>
      </Swiper>

      
    </>
  );
}

