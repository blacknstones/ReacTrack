import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function AboutPage() {
    return (
        <div className="about-page">
            <Header />
            <div className="main-content">
                <div className="go-home">
                     <Link className="button link" to={"/"}>Go Home</Link>
                </div>
               <div className="about-content">
                   <p>This app is powered by <i class="far fa-heart"></i></p>
               </div>
                
            </div>


        </div>

    );
}