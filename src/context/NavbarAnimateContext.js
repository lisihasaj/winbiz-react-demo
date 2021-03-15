import React, { createContext, useState } from 'react';

export const NavbarAnimateContext = createContext();

const NavbarAnimateContextProvider = props => {
    const [toggle, setToggle] = useState(false);
    const animate = () => {
        setToggle(toggle => !toggle);
    };
    return (
        <NavbarAnimateContext.Provider value={{toggle, animate}}>
            {props.children}
        </NavbarAnimateContext.Provider>
    );
}
 
export default NavbarAnimateContextProvider;