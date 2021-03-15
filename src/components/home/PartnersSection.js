import React from 'react';
import data from './json/partners.json';
 
const PartnersSection = () => {
    return (
        <section className='partners'>
            <h1 className='title'>Ils nous font confiance.</h1>
            <div className='allLogos col-sm-12 col-md-11 col-lg-10 col-xl-10 p-0'>
                {
                    data.partners.map((element, id) => {
                        return <div className='partner col-4 col-sm-4 col-md-4 col-lg-3 col-xl-3' key={id}>
                            <img src={element.url} alt='' className='image' />
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default PartnersSection;