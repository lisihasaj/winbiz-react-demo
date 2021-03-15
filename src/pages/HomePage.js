import React from 'react';
import '../styling/HomePage.scss';
import AppSection from '../components/home/AppSection';
import Header from '../components/home/Header';
import Offers from '../components/home/Offers';
import Products from '../components/home/Products';
import SimpleStats from '../components/home/SimpleStats';
import PartnersSection from '../components/home/PartnersSection';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
    return (
        <>
            <div className='home'>
                <Header />
                <SimpleStats />
                <Offers />
                <AppSection />
                <Products />
                <PartnersSection />
                <Testimonials />
            </div>
        </>
    );
};

export default HomePage;