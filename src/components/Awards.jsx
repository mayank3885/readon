import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import tieQuest from '../assets/tie-quest.png';
import ges from '../assets/ges.png';
import mindshare from '../assets/mindshare.png';
import codie from '../assets/codie.png';
import mars from '../assets/MaRS.png';
import kidSafe from '../assets/kidSafe.png';

import { Autoplay, Navigation } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const data = [
    {
        id: 1,
        image: tieQuest,
        title: "TieQuest"
    },
    {
        id: 2,
        image: mindshare,
        title: "Mindshare Learning Technology"
    },
    {
        id: 3,
        image: ges,
        title: "GES Awards Finalist"
    },
    {
        id: 4,
        image: codie,
        title: "2018 SIIA Codie Finalist"
    },
    {
        id: 5,
        image: mars,
        title: "Mars"
    },
    {
        id: 6,
        image: kidSafe,
        title: "Kidsafe Certified"
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
        <div id="awards" className="width-1800 equal-width" style={{ margin: '100px auto' }}>
            {/* Heading section */}
            <div className="section">
                <Fade damping={0.4} triggerOnce={true}>
                    <h2 className="font38-bold font-semibold text-center" style={{ color: 'hsl(240deg 2.76% 22.88%)' }}>
                        Awards and Recognitions
                    </h2>
                </Fade>
            </div>
            {/* Row section */}
            <Fade direction="up" cascade damping={0.5} triggerOnce={true}>
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
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    className="awards"
                    style={{ maxWidth: '90%' }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="video-container flex items-center" style={{ flexDirection: 'column' }}>
                                <img src={item.image} alt={item.title} style={{ maxWidth: '200px' }} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Fade>
        </div>
    );
}
