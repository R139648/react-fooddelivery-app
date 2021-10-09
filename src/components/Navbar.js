import React from 'react';
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar_text" >
            <div className="logo"smooth={true} duration={2000}>
                <img src="/img/cg.jpg" alt="cg" />
            </div>
            <ul className="navbar_ul">
                <li>
                    <a href="home" smooth={true} duration={2000}>Home</a>
                </li>
                <li>
                    <a href="menu" smooth={true} duration={2000}>Menu</a>
                </li>
                <li>
                    <a href="shop" smooth={true} duration={2000}>Shop</a>
                </li>
                <li>
                    <a href="news" smooth={true} duration={2000}>News</a>
                </li>
                <li>
                    <a href="contact" smooth={true} duration={2000}>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar
