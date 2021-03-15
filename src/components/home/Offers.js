import React from 'react';
import data from './json/offers.json';
import { FiCheck } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

const Offers = () => {
    const firstCard = data.offersection.find(e => e.id === 1);
    const secondCard = data.offersection.find(e => e.id === 2);

    return (
        <>
            <section className='offersSection'>
                <div className='wrapper col-12 p-0'>
                    <div className='titleBox col-12 col-sm-12 col-md-12 col-lg-8 col-xl-4 p-0'>
                        <h1 className='title'>Winbiz:<br/> une solution unique à un prix unique.</h1>
                        <h6 className='description'>Les prix sont en francs suisse/chf.</h6>
                        <button className='offersCTA'>
                            en savoir plus
                        </button>
                    </div>
                    <div className='offersWrapper col-12 col-sm-12 col-md-12 col-lg-11 col-xl-8 p-0'>
                            {
                                <div className='layoutWrapper'>
                                    <h4 className='title'>{firstCard.title}</h4>
                                    <hr id='line' />
                                    <ul className='options'>
                                        {
                                            firstCard.offers.map((item, i) => {
                                                return <li key={i} className='option'>
                                                    <FiCheck className='icon' />{item}
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <hr id='line' />
                                    <h1 className='number col-12'>{firstCard.number}</h1>
                                    <p className='text col-12 p-0'>{firstCard.text}</p>
                                </div>
                            }
                        <div className='plus'>
                            <FiPlusCircle className='icon' />
                        </div>
                            {
                                <div className='additionalsWrapper'>
                                    <h4 className='title'>{secondCard.title}</h4>
                                    <hr id='line' />
                                    <ul className='options'>
                                        {
                                            secondCard.options.map((item, i) => {
                                                return <li key={i} className='option'>
                                                    <FiCheck className='icon' />{item}
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <hr id='line' />
                                    <p className='descr'><FiPlusCircle className='icon' />{secondCard.text}</p>
                                </div>
                            }
                    </div>
                </div>
            </section>
            <div className='whiteSection'>
                <h4 className='title'>Accessible sur tous vos supports.</h4>
                <img src='/winbiz/assets/mocks.png' alt='' className='image' />
                <button className='callToAction'>en savoir plus</button>
            </div>
        </>
    );
};

export default Offers;