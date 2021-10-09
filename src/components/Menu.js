import React from 'react'
import Header from './Header';
const Menu = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    
                <div className="about_img">
                    <img src="/img/sb.jpg" alt="dg" />
                        </div>
                        <div className="about_img">
                    <img src="/img/br.jpg" alt="dg" />
                </div>
                
                    </div>
                    <div className="col-6 p-25">
                        <h3>Sandwich</h3>
                        <h1>Mediterranean Veggie Sandwich</h1>
                        <p>Zesty sweet Peppadew? piquant peppers, feta cheese, cuccumbers, lettuce,vine-Header
                        ripended tomatoes, red onion and cilantro jalapejo hummus on our freshly baked tomatoes
                        Basil Bread.
                        </p>
                        <h3>Burger</h3>
                        <h1>Mediterranean Veggie Burger</h1>
                        <p>Zesty sweet Peppadew? piquant peppers, feta cheese, cuccumbers, lettuce,vine-Header
                            ripended tomatoes, red onion and cilantro jalapejo hummus on our freshly baked tomatoes
                            Basil Bread.
                        </p>
                    
                        <div className="about_btn">
                            <a href="" className="btn btn-smart">
                                VIEW MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    );
}
export default Menu