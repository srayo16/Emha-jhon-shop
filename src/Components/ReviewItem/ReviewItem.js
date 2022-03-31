import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({pd}) => {
    const {name , img, price , shipping , quantity} = pd;
    return (
        <div className='reviewItems'>

                <img src= {img} alt="" />
                <div className='main'>
                    <div className='tools'>
                        <p title={name} className="pdTitle" > { name.length > 20 ? name.slice(0 , 20) + '...' : name } </p>
                        <p><small>Price: <span style={{color: 'orange'}}>$ {price}</span></small></p>
                        <p><small>Shipping Charge: <span style={{color: 'orange'}}>$ {shipping}</span></small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
        </div>
    );
};

export default ReviewItem;