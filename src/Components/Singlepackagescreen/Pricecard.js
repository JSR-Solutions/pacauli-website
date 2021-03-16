import React from 'react';
import './Form.css'

const Pricecard = (props) => {

    return (
        <div className='price-card-main'>
            <div className='price-card'>
                <div className='price-card1'>
                    <p>Starting from <span>INR 7,500</span></p>
                    <h2>INR 6,500 <span>20% Off</span></h2>
                    <h4>per Adult</h4>
                </div>
                <hr />
                <div className='price-card2'>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Pricecard;