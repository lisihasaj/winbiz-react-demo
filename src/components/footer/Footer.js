import React from 'react';
import '../../styling/Footer.scss';
import '../../styling/responsiveness/RespFooter.scss';
import data from './footerLinks.json';
import {Link} from "react-router-dom";

const Footer = () => {
    const locations = [
        {
            id: 1,
            company: "FIDUCIAL WINBIZ SA",
            address: "Bd. Emile Jaques-Dalcroze 5",
            number: "1204 Genève",
            state: "Switzerland"
        },
        {
            id: 2,
            company: "FIDUCIAL WINBIZ SA",
            address: "Rue du Petit-Chêne 38",
            number: "1003 Lausanne",
            state: "Switzerland"
        },
        {
            id: 3,
            company: "FIDUCIAL WINBIZ SA",
            address: "Rue des Prés-de-la-Scie 7",
            number: "1920 Martigny",
            state: "Switzerland"
        }
    ];

    const endNotes = [
        "©copyrights Winbiz 2021",
        "Conditions d’utilisation",
        "Politique de confidentialité"
    ];
    
    return (
        <>
            <div className='footer'>
                <div className='col-10 contactUs'>
                    <h1 className='title'>Nous contacter.</h1>
                    <span className='phoneNumber'>058 200 25 00</span>
                    <h5 className='miniDescription'>Assistance téléphonique disponible <br /> du lundi au vendredi de 9h à 12h et de 14h à 17h.</h5>
                    <button className='contactUsButton'>
                        <Link to={'/contact'}>
                            formulaire de contact
                        </Link>
                    </button>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 linksContainer'>
                    <hr className='footerLine' />
                    <div className='textWrapper col-10 p-0'>
                        <div className='address col-12 p-0'>
                            <h5 className='col-12 p-0 title'>Nous contacter</h5>
                            <div className='locations col-12 p-0'>
                                {
                                    locations.map((element, id) => {
                                        return <div className='location col-9 col-sm-9 col-md-3 col-lg-3 col-xl-3 p-0' key={id}>
                                            <p className='element'>
                                                {element.company}<br />
                                                {element.address}<br />
                                                {element.number}<br />
                                                {element.state}
                                            </p>
                                        </div>
                                    })
                                }
                                <div className='location openTime col-3 p-0'>
                                    <p className='element'>
                                        Ouvert de 09h00 à 12h00 <br /> et de 14h00 à 16h00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='pageLinks col-12 p-0'>
                            <h5 className='col-12 p-0 title'>Plan du site</h5>
                            <div className='groups col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 p-0'>
                                {
                                    data.groups.map((element, key) => {
                                        return (
                                            <div className='group col-6 col-md-3 col-lg-3 col-xl-3 pl-0' key={key}>
                                                <h6 className='groupTitle'>{element.title}</h6>
                                                {
                                                    element.item.map((link, id) => {
                                                        return (
                                                            <ul className='links' key={id}>
                                                                <li className='link'>{ link }</li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='brandElements col-2 p-0'>
                        <img src='/winbiz/assets/logo-white.png' alt='LOGO' className='logo' />
                        <span className='concepts'>simplicité<br/>efficacité<br/>productivité</span>
                    </div>
                </div>
                <div className='copyrights col-12 p-0'>
                    <div className='wrapper col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 p-0'>
                        {
                            endNotes.map((item, id) => {
                                return (
                                    <h6 className='note' key={id}>{ item }</h6>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;