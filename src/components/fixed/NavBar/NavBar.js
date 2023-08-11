import './NavBar.scss';

import logo from '../../../assets/shared/desktop/logo.svg';
import iconOpen from '../../../assets/shared/mobile/icon-hamburger.svg';
import iconClose from '../../../assets/shared/mobile/icon-close.svg';

import {useState} from 'react';

const NavBar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="nav__logo" />
            <button className="nav__hamburgerBtn" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                <img src={hamburgerOpen ? iconClose : iconOpen} alt="menu open" className="nav__hamburgerBtn-icon"/>
            </button>
            <div className={`nav__links ${hamburgerOpen ? 'nav__links-open' : ''}`}>
                <div className="nav__links-container">
                    <p className="nav__links-item">Home</p>
                    <p className="nav__links-item">About us</p>
                    <p className="nav__links-item">Create your plan</p>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
