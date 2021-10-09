import { React } from 'react';

function Productbox(props) {
    return (
        <div className="price">
            <div className='price_img'>
                <img src="props.image" alt="" />
            </div>
            <div className="a-b-text">
                <button className='productbox-button'>Order Now</button>
            </div>
        </div>
    );
}
export default Productbox;
