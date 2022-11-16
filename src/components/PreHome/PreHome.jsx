import React from 'react'
import './home.css';
import imgBackground from '../../assets/img/fondo2.jpg'
import {Link} from 'react-router-dom'

export const PreHome = () => {
    return (
        <>
        <div className="card text-bg-dark" 
            style={{
            backgroundImage: `url(${imgBackground})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            height: "100%", }}>
            <div className="card-img-overlay">
                    <div className="letter fw-bold text-center text-uppercase fs-2">
                    <Link to="/products" className="text-reset text-decoration-none">get start</Link>
                    </div>
            </div>
                    <p className='ms-5 mt-5 paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, excepturi!.</p>
        </div>
        </>
    )
}