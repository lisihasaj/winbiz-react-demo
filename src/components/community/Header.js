import React from 'react';
import { VscSearch } from 'react-icons/vsc';

const Header = () => {
    return (
        <section className='header'>
            <div className='titleWrapper col-12 col-sm-12 col-md-10 col-lg-7 col-xl-7'>
                <h1 className='title'>
                    Toute une communauté, rien que pour vous.
                </h1>
                <h5 className='description'>
                    Retrouvez ici une large bibliothèque de contenus audios et visuels faite spécialement pour vous.
                </h5>
            </div>
            <div className='inputWrapper'>
                <form className='form-group inputContainer'>
                    <label className='label'>Vous recherchez quelque chose en particulier ?</label>
                    <div className='inputBox'>
                        <VscSearch className='searchIcon' />
                        <input
                            type='search'
                            placeholder='Rechercher'
                            name='search'
                            className='searchInput'
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Header;