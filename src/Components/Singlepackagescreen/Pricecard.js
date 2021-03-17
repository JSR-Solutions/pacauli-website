import React from 'react';
import './Form.css'

const Pricecard = (props) => {

    return (
        <div className='price-card-main'>
            <div className='price-card'>
                <div className='price-card1'>
                    <p>Starting from <span>INR {parseInt(props.price[0].cost) + 1000}</span></p>
                    <h2>INR {props.price[0].cost} <span>{parseInt((1000 / (parseInt(props.price[0].cost) + 1000)) * 100)}% Off</span></h2>
                    <h4>{props.price[0].type}</h4>
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