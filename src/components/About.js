import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>Pramod Confectionery and Food Product</h1>
                        <p>Was incorporated from last 35 years ago. It is situated at Gaya in Bihar. Sri Binod Prasad Bhadani is M.D. of Company under whose leadership, we have been scaling new heights in the market.
                        We are dealing in three categories of food products like Sweets, namkeens and
                        Snacks</p>
                    <div>
                    <div className="about_btn">
                        <a href="" className="btn btn-smart">
                            READ MORE
                        </a>
                    </div>
                </div>
                    </div>
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/img/dg.jpg" alt="dg"/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   ) 
}
export default About