import React from 'react';
import cards from './json/cards.json';

const Etape3 = (props) => {
    const etape3 = cards?.find(e => e.id === 2);

    return (
        <>
            {
                <div className='etape'>
                    <h5 className='title'>{etape3.title}</h5>
                    <h4 className='subtitle'>{etape3.subtitle}</h4>
                    <div className='cardsContainer col-12 p-0'>
                        {
                            etape3.cards.map((item, key) => {
                                return <button
                                    className={props.selected === item.id
                                        ? 'thirdCard thirdSelected' : 'thirdCard'}
                                    key={key}
                                    onClick={() => props.setEtape3(item.id)}
                                >
                                    <div className='upperItems'>
                                        <span className='icon' />
                                        <h6 className='cardTitle'>{item.title}</h6>
                                    </div>
                                    <p className='description'>
                                        {item.description}
                                    </p>
                                    <span className='thumbnail'>
                                        {item.thumbnail}
                                    </span>
                                </button>
                            })
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Etape3;