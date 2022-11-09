import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FooterComponent(){
    return (
        <footer className="footer">
            <div className="footer-row-flex">
                <div>
                <img src="images/logo.svg" alt="" className="logo" />
                <div className="footer-row">
                    <div>
                        <img src="images/icon-location.svg" alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adispicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="footer-row">
                    <div>
                        <img src="images/icon-phone.svg" alt="" />
                    </div>
                    <div>
                        <p>+1-543-123-4567</p>
                    </div>
                </div>
                <div className="footer-row">
                    <div>
                        <img src="images/icon-email.svg" alt="" />
                    </div>
                    <div>
                        <p>example@fylo.com</p>
                    </div>
                </div>
                </div>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-row-socials">
                    <div>
                        <FaFacebook />
                    </div>
                    <div>
                        <FaTwitter />
                    </div>
                    <div>
                        <FaInstagram />
                    </div>
                </div>
                <p className="copy">© Copyright 2022 Huddle. All rights reserved.</p>
            </div>
        </footer>
    )
}