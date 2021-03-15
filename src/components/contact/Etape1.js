import React from 'react';
import cards from './json/cards.json';

const Etape1 = (props) => {
    const etape1 = cards?.find(e => e.id === 0);

    return (
        <>
            {
                <div className='etape'>
                    <h5 className='title'>{etape1.title}</h5>
                    <h4 className='subtitle'>{etape1.subtitle}</h4>
                    <div className='cardsContainer col-12 p-0'>
                        {
                            etape1.cards.map((item, key) => {
                                return <button
                                    className={props.selected === item.id
                                        ? 'card cardSelected' : 'card'}
                                    key={key}
                                    onClick={() => props.setEtape1(item.id)}
                                >
                                    <span className='icon' />
                                    <h6 className='cardTitle'>{item.title}</h6>
                                </button>
                            })
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Etape1;