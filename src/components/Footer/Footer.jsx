import React from 'react'
import "./Footer.scss"
import dummyFooter from '../../API/dummyFooter'
import "./Footer.scss"
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        dummyFooter.map((item, index) => {
                            return (
                                <div className="col-area col-md-auto d-flex" key={index}>
                                    <div className="box d-flex">
                                        <div className="d-flex"><a href={`${item.link}`}><i className={`${item.icon}`} ></i>{item.title}</a></div>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}
