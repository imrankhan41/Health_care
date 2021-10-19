import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 banner"
                src="https://i.ibb.co/gPWKZqf/banner3.jpg"
                alt="First slide"
                />
                <Carousel.Caption className="banner-text">
                <h5>Welcome To The Gym World</h5>
                <p> Make you feel happier </p>
                <button className="button1">Explore Us</button>
                <button className="button2">Watch Us</button>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner"
                src="https://i.ibb.co/rQgXrCf/banner5.jpg"
                alt="Second slide"
                />
                <Carousel.Caption className="banner-text">
                <h5>Come & Explore Your Fitness</h5>
                <p>Gym is good for your muscles and bones</p>
                <button className="button1">Explore Us</button>
                <button className="button2">Watch Us</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner"
                src="https://i.ibb.co/mznKzdx/banner6.jpg.jpg"
                alt="Third slide"
                />
                <Carousel.Caption className="banner-text">
                <h5>Show Your Potentiality To The World</h5>
                <p> Regular exercise can increase your energy levels</p>
                <button className="button1">Explore Us</button>
                <button className="button2">Watch Us</button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;

