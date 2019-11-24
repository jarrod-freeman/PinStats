import React from 'react';
import '../../css/Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            © {new Date().getFullYear()}
        </div>
    );
};

export default Footer;