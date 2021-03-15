import React from 'react';
import data from './json/statistics.json';

const SimpleStats = () => {
    return (
        <section className='statistics'>
            <div className='p-0 statsWrapper'>
                {
                    data.statistics.map((element, id) => {
                        return <div className='stat' key={id}>
                            <img src={element.url} className='image' alt={element.name} />
                            <h5 className='description'>{ element.description }</h5>
                        </div>
                    })
                }
            </div>
            <div className='buttonWrapper'>
                <button className='statsCTA'>
                    en savoir plus
                </button>
            </div>
        </section>
    );
};

export default SimpleStats;