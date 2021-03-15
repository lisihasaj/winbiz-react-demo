import React from 'react';
import cards from './json/cards.json';

const Etape2 = props => {
    const etape2 = cards?.find(e => e.id === 1);

    return (
        <>
            {
                <div className='etape'>
                    <h5 className='title'>{etape2.title}</h5>
                    <h4 className='subtitle'>{etape2.subtitle}</h4>
                    <div className='cardsContainer col-12 p-0'>
                        {
                            etape2.cards.map((item, key) => {
                                return <button
                                    className={props.selected === item.id
                                        ? 'card cardSelected' : 'card'}
                                    key={key}
                                    onClick={() => props.setEtape2(item.id)}
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

export default Etape2;