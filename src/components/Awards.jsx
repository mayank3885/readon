import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import kidsSafeCertified from '../assets/5.png';
import patented from '../assets/6.png';
import mars from '../assets/7.png';
import eight from '../assets/5.png';
import nine from '../assets/6.png';
import ten from '../assets/7.png';

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
        image: eight,
        title: "YouTube image player"
    },
    {
        id: 5,
        image: nine,
        title: "Mars"
    },
    {
        id: 6,
        image: ten,
        title: "Patented Property"
    },
];

export default function Awards() {
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    };

    return (
        <div id="awards" className="mt-20">
            {/* Heading section */}
            <div className="section">
                <Fade damping={0.4} triggerOnce={true}>
                    <h2 className="font38-bold font-semibold text-center" style={{ color: 'hsl(240deg 2.76% 22.88%)' }}>
                        Awards and Recognitions
                    </h2>
                </Fade>
            </div>
            {/* Row section */}
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                breakpoints={breakpoints}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="awards"
                style={{ maxWidth: '80%' }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="video-container flex items-center" style={{ flexDirection: 'column' }}>
                            <img src={item.image} alt={item.title} style={{ maxWidth: '200px' }} />{item.title}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
