import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const data = [
    {
        id: 1,
        video: "https://www.youtube.com/embed/9qDRtQxd1uw?enablejsapi=1",
        title: "YouTube video player",
    },
    {
        id: 2,
        video: "https://www.youtube.com/embed/UivL9VO4s2U?enablejsapi=1",
        title: "YouTube video player",
    },
    {
        id: 3,
        video: "https://www.youtube.com/embed/kd8cvdZcZ_k?enablejsapi=1",
        title: "YouTube video player",
    },
    {
        id: 4,
        video: "https://www.youtube.com/embed/qGr7_-3dyCY?enablejsapi=1",
        title: "YouTube video player",
    },
];

export default function Testimonials() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const videoRefs = useRef([]);
    const [YT, setYT] = useState(null);

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    };

    const handlePlayPause = (event) => {
        const playerState = event.data; // 1 is PLAYING, 2 is PAUSED
        if (playerState === 1) {
            if (swiperInstance) {
                swiperInstance.autoplay.stop();
            }
        } else if (playerState === 2) {
            setTimeout(() => {
                if (swiperInstance) {
                    swiperInstance.autoplay.start();
                }
            }, 3000);
        }
    };

    const loadYTAPI = () => {
        return new Promise((resolve) => {
            if (window.YT && window.YT.Player) {
                resolve(window.YT);
            } else {
                const script = document.createElement('script');
                script.src = 'https://www.youtube.com/iframe_api';
                script.onload = () => {
                    const interval = setInterval(() => {
                        if (window.YT && window.YT.Player) {
                            clearInterval(interval);
                            resolve(window.YT);
                        }
                    }, 100);
                };
                document.body.appendChild(script);
            }
        });
    };

    useEffect(() => {
        const initializePlayers = async () => {
            const YT = await loadYTAPI();
            setYT(YT);

            if (videoRefs.current.length > 0) {
                videoRefs.current.forEach((iframe, index) => {
                    if (iframe) {
                        const player = new YT.Player(iframe, {
                            events: {
                                'onStateChange': handlePlayPause,
                            },
                        });
                        console.log(`Player initialized for video ${index + 1}`);
                    }
                });
            }
        };

        initializePlayers();
    }, []);

    useEffect(() => {
        // Initialize YouTube players once the YT object is available
        if (YT && videoRefs.current.length > 0) {
            videoRefs.current.forEach((iframe, index) => {
                new YT.Player(iframe, {
                    events: {
                        'onStateChange': handlePlayPause,
                    },
                });
            });
        }
    }, [YT]); // Runs after YT is available

    return (
        <div id="testimonial" className="width-1800 equal-width pt-20" style={{ margin: 'auto' }}>
            <div className="section mb30">
                <Fade direction="up" damping={0.4} triggerOnce={true}>
                    <h2 className="font38-bold mb-4 font-semibold text-[#000000] text-center">
                        Ready to Transform Your Child’s Learning?
                    </h2>
                    <p className="font18-light text-center mb-6 md:mb-12">
                        Thousands of parents have trusted ReadON to help their children overcome learning challenges and achieve their best.
                    </p>
                </Fade>
            </div>
            <Fade direction="up" damping={0.4} triggerOnce={true}>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={breakpoints}
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    className="testimonials"
                    onSwiper={setSwiperInstance}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="video-container">
                                <iframe
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    width="100%"
                                    height="250px"
                                    src={item.video}
                                    title={item.title}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Fade>
        </div>
    );
}
