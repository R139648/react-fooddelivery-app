import React from 'react';
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner_content">
                <div className="container">
                    <div className="banner_text">
                        <h2>Paprika Fine Dine Restaurant</h2>
                        <h3>Pramod Tower</h3>
                        <p>A Unit of "Pramod Confectionery & Food Products</p>
                        <p>K.P Road Chowk Near Tower Chowk Gaya, Bihar 823001
                        Tel : 0631 - 2222403
                        Mob : 7564901551
                    </p>
                        <div className="banner_btn">
                            <a href="" className="btn btn-smart">Delivery Now</a>
                        </div>
                          
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
