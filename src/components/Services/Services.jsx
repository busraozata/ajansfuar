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
                <div className="serviceList">
                    <div className="serviceItem d-flex align-items-center flex-column justify-content-center " >
                        <div className="box w-100">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="img-wrapper ">
                                        <img src={process.env.PUBLIC_URL + './image/service.jpg'} className="img-fluid" alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="serviceContent d-flex flex-column justify-content-center align-items-center">
                                        <h4>Fuar Organizasyon Fotoğraf Çekimi</h4>
                                        <p>Fuar organizasyonunuzda standınız için gün boyu 1 fotografçımız
                                            bulunmaktadır. Öncelikle standınızın boş halini ve fuar alanındaki tüm önemli detayların çekimini yapıyoruz. Ardından firmanın tüm çalışanları ve yöneticileri ile grup-tekli fotograf çekimleri yapıyoruz. Sonrasında standınızı ziyaret eden misafirleriniz ve iş ortaklarınız ile birlikte yapmış olduğunuz görüşmeleri anlık spontane fotograf
                                            çekimi ile kayıt altına alıyoruz. </p>
                                        <div className="list">
                                            <ul>
                                                <li>Ort. 5 saatlik fotoğraf çekimi. (09:30-15:00) </li>
                                                <li>Ort. 400 adet fotoğraf yüksek çözünürlüklü teslim edilir.</li>
                                                <li>Seçilen 50 adet fotoğraf için retcuh ve color işlemi uygulanır.</li>
                                                <li>2 is gününde teslim.</li>
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
                                            className="mySwiper"
                                        >
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={process.env.PUBLIC_URL + 'image/service1.jpg'}>
                                                <div className="img-wrapper position-relative">
                                                    <img src={process.env.PUBLIC_URL + 'image/service1.jpg'} className='img-fluid' alt="img" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={process.env.PUBLIC_URL + 'image/service2.jpg'}>
                                                <div className="img-wrapper position-relative">
                                                    <img src={process.env.PUBLIC_URL + 'image/service2.jpg'} className='img-fluid' alt="img" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={process.env.PUBLIC_URL + 'image/service3.jpg'}>
                                                <div className="img-wrapper position-relative">
                                                    <img src={process.env.PUBLIC_URL + 'image/service3.jpg'} className='img-fluid' alt="img" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={process.env.PUBLIC_URL + 'image/service1.jpg'}>
                                                <div className="img-wrapper position-relative">
                                                    <img src={process.env.PUBLIC_URL + 'image/service1.jpg'} className='img-fluid' alt="img" />
                                                </div>
                                            </SwiperSlide>

                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceItem d-flex align-items-center flex-column justify-content-center " >
                        <div className="box w-100">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="video-img position-relative d-flex justify-content-center align-items-center" data-fancybox="gallery"
                                        data-src={"https://www.youtube.com/watch?v=HVCnpFKZsXI"}>
                                        <a className="play-btn" href='/#' role="button"></a>
                                        <img src={process.env.PUBLIC_URL + './image/service4.jpg'} className="img-fluid" alt='' />
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="serviceContent d-flex flex-column justify-content-center align-items-center">
                                        <h4>Fuar Tanıtımı Kısa Filmi</h4>
                                        <p>Fuar organizasyonunuzda standınız için gün boyu 1 videograph
                                            arkadaşımız bulunmaktadır. Öncelikle standınızın boş halini ve fuar
                                            alanındaki tüm önemli detaylardan kısa kısa görüntüler topluyoruz.
                                            Ardından standınızı en iyi gören açıdan timelpse sistemi ile görüntüler
                                            elde ediyoruz. Sonrasında standınızı ziyaret eden misafirleriniz ve iş
                                            ortaklarınız ile birlikte yapmış olduğunuz görüşmeler sırasında
                                            görüntüler topluyor ve bu görüntüleri
                                            kısa film haline getiriyoruz.
                                        </p>
                                        <div className="list">
                                            <ul>
                                                <li>Ort. 5 saatlik bir video çekimi. (09:30-15:00)  </li>
                                                <li>1 dk’lık ve ort. 2 dk’lık 2 farklı kısa film teslim edilir. </li>
                                                <li>7 iş gününde teslim. </li>
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
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
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
                                            className="mySwiper2"
                                        >
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={"https://www.youtube.com/watch?v=1Xl-7gg3AHc"}>
                                                <div className="img-wrapper position-relative d-flex justify-content-center align-items-center">
                                                    <a className="play-btn" href='/#' role="button"></a>
                                                    <img src={process.env.PUBLIC_URL + './image/service5.jpg'} className="img-fluid" alt='' />
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={"https://www.youtube.com/watch?v=1Xl-7gg3AHc"}>
                                                <div className="img-wrapper position-relative d-flex justify-content-center align-items-center">
                                                    <a className="play-btn" href='/#' role="button"></a>
                                                    <img src={process.env.PUBLIC_URL + './image/service6.jpg'} className="img-fluid" alt='' />
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={"https://www.youtube.com/watch?v=1Xl-7gg3AHc"}>
                                                <div className="img-wrapper position-relative d-flex justify-content-center align-items-center">
                                                    <a className="play-btn" href='/#' role="button"></a>
                                                    <img src={process.env.PUBLIC_URL + './image/service7.jpg'} className="img-fluid" alt='' />
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide data-fancybox="gallery"
                                                data-src={"https://www.youtube.com/watch?v=1Xl-7gg3AHc"}>
                                                <div className="img-wrapper position-relative d-flex justify-content-center align-items-center">
                                                    <a className="play-btn" href='/#' role="button"></a>
                                                    <img src={process.env.PUBLIC_URL + './image/service5.jpg'} className="img-fluid" alt='' />
                                                </div>

                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
