import React, { useContext } from 'react';
import { NavbarAnimateContext } from '../../context/NavbarAnimateContext';
import '../../styling/responsiveness/RespNavbar.scss';

const NavToggleButton = ({ navItems }) => {
    const {toggle, animate} = useContext(NavbarAnimateContext);
        return (
        <>
            <button 
                className={ 
                    toggle ? 
                        'burgerButton animate' :
                        'burgerButton' }
                onClick={animate}>
                <span className={ navItems ? 'line black' : 'line'} />
            </button>
        </>
    );
};

export default NavToggleButton;