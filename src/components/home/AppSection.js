import React from 'react';
import data from './json/appdata.json';

const AppSection = () => {
    return (
        <>
            <section className='appSection'>
                <div className='fullScreenGradience' />
                <div className='textWrapper col-12 p-0'>
                    <h1 className='title'>Téléchargez l’app <br /> et consultez winbiz <br /> partout, tout le temps.</h1>
                    <div className='imageWrapper'>
                        <img src='/winbiz/assets/ios.png' alt='DownloadiOS' className='image' />
                        <img src='/winbiz/assets/android.png' alt='DownloadAndroid' className='image' />
                    </div>
                </div>
            </section>
            <section className='advantages'>
                <h4 className='title'>Avantages du Winbiz.</h4>
                <div className='col-10 wrapper'>
                    {
                        data.appdata.map((element, id) => {
                            return <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 box' key={id}>
                                <img src={element.url} alt={element.title} className='image' />
                                <h4 className='boxTitle'>{element.title}</h4>
                                <p className='description'>{element.description}</p>
                            </div>
                        })
                    }
                </div>
                <button className='sectionCTA'>contactez notre support</button>
            </section>
        </>
    );
};

export default AppSection;