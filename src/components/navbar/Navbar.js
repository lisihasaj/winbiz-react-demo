import React from 'react';
import '../../styling/Navbar.scss';
import '../../styling/responsiveness/RespNavbar.scss';
import { Link, NavLink } from 'react-router-dom';
import SideDrawer from './SideDrawer';
import NavToggleButton from './NavToggleButton';

const Navbar = ({ navItems }) => {

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
        <>
            <SideDrawer />
            <nav className='navbar'>
                <div className='navWrapper'>
                    <NavToggleButton navItems={navItems} />
                    <ul className='items col-5'>
                        <li className='navItem'>
                            <NavLink className='product'
                                activeClassName='navActive'
                                to='/product'>Produit
                            </NavLink>
                        </li>
                        {
                            navLinks.map(({ name, id }) => (
                                <li className='navItem' key={id}>
                                    <NavLink
                                        className={navItems ? 'navLink blackLink' : 'navLink'}
                                        activeClassName={navItems ? 'active blackActive' : 'active'}
                                        to={`/${id}`}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='spacer' />
                    <div className='rightSide'>
                        <div className='buttonsWrapper'>
                            <button className='languageBtn'>FR</button>
                            <span id='spacer' />
                            <button className='user'>Espace Membre</button>
                        </div>
                        <div className='logoWrapper'>
                            <Link className='logo' to='/'>
                                <img
                                    src='/winbiz/assets/logo-white.png'
                                    alt='LOGO'
                                    className={navItems ? 'pngLogo pngBlack' : 'pngLogo'}
                                />
                            </Link>
                            <span className={navItems ? 'concepts blackConcepts' : 'concepts'}>
                                simplicité<br />
                                efficacité<br />
                                productivité
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;