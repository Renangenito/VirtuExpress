import React from 'react';
import { DivFooter } from './FooterStyles'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
function Footer(){
    return(
        <DivFooter>
                <ul>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        < FaInstagram />
                    </li>
                    <li>
                        <FaLinkedin />
                    </li>

                </ul>
                <p>by: Renan Lima <span>VirtuExpress</span> &copy; </p>
        </DivFooter>
    )
}
export default Footer;