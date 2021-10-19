import React from 'react';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Footer from '../Footer/Footer';
import Schedule from '../Scedule/Schedule';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Consultation></Consultation>
            <Schedule></Schedule>
            <Footer></Footer>
        </div>
    );
};

export default Home;