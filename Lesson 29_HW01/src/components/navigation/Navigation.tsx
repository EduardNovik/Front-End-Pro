import React, { useState } from 'react';
import './navigationStyle.css'
import fire from '../../assets/fire.svg'
import settings from '../../assets/settings.svg'
import logout  from '../../assets/logout.svg'

const Navigation = () => {
    const [isExpanded, setExpandState] = useState(false)
    return (
        <nav className={isExpanded ? 'side-nav-container' : 'side-nav-container side-nav-container-nx'}>
            <div className='side-nav-heading'>
                <p>Menu</p>
                <button 
                    className={isExpanded ? 'side-nav-btn-in side-nav-btn': 'side-nav-btn-out side-nav-btn'}
                    onClick={() => setExpandState(!isExpanded)}>
                        
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className = {isExpanded ?  'side-nav-tools' : 'side-nav-tools side-nav-tools-out'}>
                <div className='topPostsBlock'>
                    <img src={fire} alt="" />
                    <p>Top post's</p>
                </div>
                <div className='settingsBlock'>
                    <img src={settings} alt="" />
                    <p>Settings</p>
                </div>
                <div className='logoutBlock'>
                    <img src={logout} alt="" />
                    <p>Log out</p>
                </div>
            </div>
            
        </nav>
    );
};

export default Navigation;