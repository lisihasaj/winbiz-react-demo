import React from 'react';
import '../../styling/HomePage.scss';
import '../../styling/responsiveness/RespHomePage.scss';
import HeaderSlider from './HeaderSlider';
import ScrollAnimation from './ScrollAnimation';

const Header = () => {
    return (
        <>
            <section className='header'>
                <div className='gradientLayer' />
                <div className='contentWrapper col-12 p-0'>
                    <div className='heading col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 p-0'>
                        <HeaderSlider />
                        <h5 className='shortDescription'>Logiciel de gestion suisse <br /> pour les entrepreneurs suisses.</h5>
                        <div className='wrapper'>
                            <button className='homeCTA'>TéLéCHARGER</button>
                        </div>
                    </div>
                    <div className='col-6 col-md-5 col-lg-6 col-xl-6 p-0 wideScrContent'>
                        <div className='col-10 p-0 rightContainer'>
                            <h6 className='name'>
                                <hr id='line' />
                                CHRISTOPHE PITTET<br />ENTREPRENEUR
                            </h6>
                            <img src='/winbiz/assets/thumbnail.png' alt='Swiss Made' className='thumbnail' />
                        </div>
                        <div className='col-2 p-0' />
                    </div>
                </div>
                <div className='scrollContainer p-0'>
                    <ScrollAnimation />
                </div>
            </section>
        </>
    );
};

export default Header;