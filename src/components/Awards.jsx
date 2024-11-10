
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import kidsSafeCertified from '../assets/kidSafeCertified.png'
import patented from '../assets/PatentedProperty.png'
import mars from '../assets/MaRS.png'

import { Autoplay, Navigation } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const data = [
    {
        id: 1,
        image: kidsSafeCertified,
        title: "Kids Safe Certified"
    },
    {
        id: 2,
        image: mars,
        title: "Mars"
    },
    {
        id: 3,
        image: patented,
        title: "Patented Property"
    },
    {
        id: 4,
        image: patented,
        title: "YouTube image player"
    },
    {
        id: 5,
        image: mars,
        title: "Mars"
    },
    {
        id: 6,
        image: patented,
        title: "Patented Property"
    },
];

export default function Awards() {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    };

    return (
        <div id="awards" className='mt-20'>
            {/* heading section */}
            <div className="section">
                <Fade damping={0.4} triggerOnce={true}>
                    <h2 className='font38-bold font-semibold text-[#003049] text-center'>Awards and Recognitions</h2>
                </Fade>
            </div>
            {/* row section */}
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                spaceBetween={0}
                loop={true}
                breakpoints={breakpoints}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="video-container flex items-center" style={{ flexDirection: 'column' }}>
                            <img src={item.image} alt={item.id} style={{ maxWidth: '300px' }} />
                            {/* <p className="font24-bold">{item.title}</p> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
