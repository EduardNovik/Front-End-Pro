import React from 'react';
import './headerStyle.css'
import logo3 from '../../assets/logo2.svg'
import searchLogo from "../../assets/search.png";

const Header = () => {

    return (
        <header className='headerBlock'>
            <div className='logoDiv'>
                <img src={logo3} alt="#" className='logoImg'/>
            </div>

            <div className='searchLinksDiv'>
                <div className='linksBlock'>
                    <a href="">Home</a>
                    <a href="">About</a>
                </div>

                <div className='searchBlock'>
                    <input type="text" placeholder='Search'/>
                    <img src={searchLogo} alt="logo" className='searchImg'/>
                </div>
            </div>
        </header>
    );
};

export default Header;