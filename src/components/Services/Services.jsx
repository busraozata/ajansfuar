/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import "./Services.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from "react";
import dummyServices from '../../API/dummyServices';
export default function Services(props) {
    const delegate = props.delegate || "[data-fancybox]";

    useEffect(() => {
        const opts = props.options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
            NativeFancybox.destroy();
        };
    }, [delegate, props.options]);
    return (
        <section className='services'>
            <div className="container">
                <div className="service-content d-flex justify-content-center">
                    <div className="serviceList">
                        {
                            dummyServices.map((serviceItem, index) => {
                                return (
                                    <div className="serviceItem d-flex align-items-center flex-column justify-content-center" key={index} >
                                        <div className="box w-100">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    {
                                                        serviceItem.video ? (
                                                            <div className="video-img position-relative d-flex justify-content-center align-items-center" data-fancybox="gallery"
                                                                data-src={serviceItem.video}>
                                                                <a className="play-btn" href='/#' role="button"></a>
                                                                <img src={serviceItem.image} className="img-fluid" alt={serviceItem.title} />
                                                            </div>
                                                        ) : <div className="img-wrapper">
                                                            <img src={serviceItem.image} className="img-fluid" alt={serviceItem.title} />
                                                        </div>
                                                    }

                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="serviceContent d-flex flex-column justify-content-center align-items-center">
                                                        <h4>{serviceItem.title}</h4>
                                                        <p>{serviceItem.text} </p>
                                                        <div className="list">
                                                            <ul>
                                                                {
                                                                    serviceItem.subStances ? (
                                                                        serviceItem.subStances?.map((item, index) => {
                                                                            return (
                                                                                <li key={index}>{item.item} </li>
                                                                            )
                                                                        })
                                                                    ) : null
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-area">
                                                    <div className="swiper-container">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            navigation={true}
                                                            modules={[Navigation, Autoplay]}
                                                            breakpoints={{
                                                                640: {
                                                                    slidesPerView: 1,
                                                                    spaceBetween: 20,
                                                                },
                                                                768: {
                                                                    slidesPerView: 2,
                                                                    spaceBetween: 40,
                                                                },
                                                                1024: {
                                                                    slidesPerView: 3,
                                                                    spaceBetween: 50,
                                                                },
                                                            }}
                                                            autoplay={{
                                                                delay: 2500,
                                                                disableOnInteraction: false,
                                                            }}
                                                            className={`mySwiper${index}`}
                                                        >
                                                            {
                                                                serviceItem.sliderImg ? (
                                                                    serviceItem.sliderImg?.map((item, index) => {
                                                                        return (
                                                                            <SwiperSlide key={index} data-fancybox="gallery"
                                                                                data-src={item.image}>
                                                                                <div className="img-wrapper position-relative">
                                                                                    <img src={item.image} className='img-fluid' alt="img" />
                                                                                </div>
                                                                            </SwiperSlide>
                                                                        )
                                                                    })
                                                                ) : null
                                                            }
                                                            {
                                                                serviceItem.sliderVideo ? (
                                                                    serviceItem.sliderVideo?.map((item, index) => {
                                                                        return (
                                                                            <SwiperSlide key={index} data-fancybox="gallery"
                                                                                data-src={item.video} >
                                                                                <div className="img-wrapper position-relative d-flex justify-content-center align-items-center">
                                                                                    <a className="play-btn" href='/#' role="button"></a>
                                                                                    <img src={item.image} className='img-fluid' alt="" />

                                                                                </div>

                                                                            </SwiperSlide>
                                                                        )
                                                                    })
                                                                ) : null
                                                            }

                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section >
    )
}
