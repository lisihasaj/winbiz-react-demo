import React, { useContext } from 'react';
import '../../styling/responsiveness/RespNavbar.scss';
import { NavbarAnimateContext } from '../../context/NavbarAnimateContext';
import { Link } from 'react-router-dom';

const SideDrawer = () => {
    const { toggle, animate } = useContext(NavbarAnimateContext);
    
    const navLinks = [
        {
            name: "Support",
            id: "support"
        },
        {
            name: "Communauté",
            id: "community"
        },
        {
            name: "Winbiz",
            id: "about"
        }
    ];

    return (
        <div className={toggle ? 'sideDrawer sideDrawerOpen' : 'sideDrawer'}>
            <div className={toggle ? 'sideDrawerToolbar' : 'sideDrawerToolbar disabled'}>
                <button 
                    onClick={animate}
                    className={toggle ? 
                        'closeSlideButton ex' :
                        'closeSlideButton'}>
                    <span className='line__toggle'></span>
                </button>
                <div className='spacer' />
                <div className='rightSide'>
                    <div className='buttonsWrapper'>
                        <button className='languageBtn'>FR</button>
                        <span id='spacer' />
                        <button className='user'>Espace Membre</button>
                    </div>
                    <div
                        className='logoWrapper'
                        onClick={animate}
                    >
                        <div className='logo' href='/'>
                            <img
                                src='/winbiz/assets/logo-white.png'
                                alt='LOGO'
                                className='pngLogo'
                            />
                        </div>
                        <span className='concepts'>
                            simplicité<br />
                            efficacité<br />
                            productivité
                        </span>
                    </div>
                </div>
            </div>
            <ul className='items col-12'>
                <Link
                    className='product'
                    to='/product'
                    onClick={animate}
                >
                    Produit
                </Link>
                {
                    navLinks.map(({ name, id }) => (
                        <Link
                            className='navLink'
                            onClick={animate}
                            key={id}
                            to={`/${id}`}>
                            {name}
                        </Link>
                    ))
                }
                <hr className='col-7 p-0' id='line' />
            </ul>
        </div>
    );
};

export default SideDrawer;