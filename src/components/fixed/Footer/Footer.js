import './Footer.scss';

import logo from '../../../assets/shared/desktop/logo-light.svg';
import iconFb from '../../../assets/shared/desktop/icon-facebook.svg';
import iconTw from '../../../assets/shared/desktop/icon-twitter.svg';
import iconIg from '../../../assets/shared/desktop/icon-instagram.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="logo" className="footer__logo"/>
            <div className="footer__links">
                <Link to="/" className="nav-link">home</Link>
                <Link to="/about" className="nav-link">about us</Link>
                <Link to="/plan" className="nav-link">create your plan</Link>
            </div>
            <div className="footer__socials">
                <a href="/" className="footer__socials-link">
                    <img src={iconFb} alt="facebook icon" className="footer__socials-icon"/>
                </a>
                <a href="/" className="footer__socials-link">
                    <img src={iconTw} alt="twitter icon" className="footer__socials-icon"/>
                </a>
                <a href="/" className="footer__socials-link">
                    <img src={iconIg} alt="instagram icon" className="footer__socials-icon"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
