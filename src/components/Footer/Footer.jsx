// import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                    <h5 className="card-title">NEWSLETTER</h5>
                    <p className="card-text">Subscribe to get latest news</p>
                    <Link to="/login" className="btn btn-primary">SUBSCRIBE NOW</Link>
                </div>
                <div className="card-footer text-muted">
                    <li>
                        <a href="condition">Terms &amp; Conditions</a>
                    </li>
                    <li>
                        <a href="privqcy">Privacy Policy</a>
                    </li>
                    <li>&copy; 2022 Squad Ahmed</li>
                </div>
            </div>
        </footer>
    );
};
