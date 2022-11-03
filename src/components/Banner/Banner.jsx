import React from 'react'
import "./Banner.scss"
import dummyBanner from '../../API/dummyBanner'
export default function Banner() {
    const title = dummyBanner.title.replace('ve', '<span>ve</span>')
    return (
        <section className='banner'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />

                        <div className="text w-100 d-flex justify-content-center">
                            <p className='text-center'> {dummyBanner.text} </p>
                        </div>
                        <div className="img-content w-100 d-flex justify-content-center">
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
