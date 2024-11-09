
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const data = [
    {
        id: 1,
        video: "https://www.youtube.com/embed/9qDRtQxd1uw?si=dCXFYLa2j4H-55TF",
        title: "YouTube video player"
    },
    {
        id: 2,
        video: "https://www.youtube.com/embed/UivL9VO4s2U?si=p1YtRFVy0xK9JXp5",
        title: "YouTube video player"
    },
    {
        id: 3,
        video: "https://www.youtube.com/embed/kd8cvdZcZ_k?si=glUyUjiKNWk01Ia0",
        title: "YouTube video player"
    },
    {
        id: 4,
        video: "https://www.youtube.com/embed/qGr7_-3dyCY?si=5BnzCRChDcuuLzm6",
        title: "YouTube video player"
    },
];

export default function Testimonials() {
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
        <div id="testimonial">
            {/* heading section */}
            <div className="section mb30">
                <Fade damping={0.4} triggerOnce={true}>
                    <h2 className='text-2xl font-semibold text-[#003049] text-center' style={{ fontFamily: 'Helvetica, Arial', fontSize: '24pt', marginBottom: '50px' }}>Testimonials</h2>
                </Fade>
            </div>
            {/* row section */}
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                breakpoints={breakpoints}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="300px"
                                src={item.video}
                                title={item.title}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
