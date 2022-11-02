import React from 'react'
import "./Banner.scss"
import dummyBanner from '../../API/dummyBanner'
export default function Banner() {
    return (
        <section className='banner'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h1>{dummyBanner.title}</h1>
                        {/* <h1>Fuar Etkinlik Fotoğraf Çekimi <span>ve</span> Tanıtım Filmi </h1> */}
                        <div className="text w-100 d-flex justify-content-center">
                            <p className='text-center'> {dummyBanner.text} </p>
                        </div>
                        <div className="img-content">
                            <div className="img-wrapper w-100 d-flex justify-content-center">
                                <img src={dummyBanner.image} className="img-fluid w-100 banner-img" alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
