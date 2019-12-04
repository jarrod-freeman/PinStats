import React, { FunctionComponent } from 'react';
import '../../css/Footer.css';

const Footer: FunctionComponent = () => {
    return(
        <div className="footer">
            © {new Date().getFullYear()}
        </div>
    );
};

export default Footer;