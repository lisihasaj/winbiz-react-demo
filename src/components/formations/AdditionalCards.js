import React from 'react';
import data from './json/additionalCards.json';

const AdditionalCards = () => {
    const additionalCards = data.firstPage;
    
    return (
        <div className='additionalsContainer'>
            <div className='additionals col-10'>
                <h5 className='additionalsTitle'>Ces formations pourraient aussi vous intéresser:</h5>
                <div className='cardsContainer col-12 p-0'>
                    {
                        additionalCards.map((element, key) => {
                            return <div
                                className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0 imageContainer'
                                key={key}
                            >
                                <a href={element.url} className='route'>
                                    <div className='imageWrapper'>
                                        <div className='titleWrapper'>
                                            <h5 className='trainingTitle'>{element.title}</h5>
                                            <p className='subtitle'>{element.subtitle}</p>
                                        </div>
                                        <div className='gradientLayer' />
                                        <img src={element.image} alt='' className='trainingImage' />
                                    </div>
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AdditionalCards;