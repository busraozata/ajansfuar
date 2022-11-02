import React from 'react'
import "./Header.scss"
export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-inner d-flex justify-content-center">
                    <img src={process.env.PUBLIC_URL + 'image/logo.png'} className="img-fluid" alt="logo" />
                </div>
            </div>
        </header>
    )
}
