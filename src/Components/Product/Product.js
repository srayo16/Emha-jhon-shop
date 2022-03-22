import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({addtoCart , pd}) => {
    // console.log(props);
    let {name ,img , price ,seller ,ratings } = pd;
    return (
        
        <div className='out'>
            {/* <div className="col-md-4 col-lg-4">
            <div className="card p-3 border"> className='row container' */}
             <div className='p-2'>
             <img className='img-fluid' src= {img} alt="" />
             <h4 className='titlee'>{name.slice(0,22)}</h4>
             <p className='price'>Price: ${price}</p>
             <small className='capu'>Manufacturer: {seller}</small>
             <br />
             <small  className='capu'>Ratings: {ratings} stars</small>
             
             </div>
             <button className='but d-flex justify-content-center align-items-center' onClick={() => addtoCart(pd)}>
                 <p className='phand me-2'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                 </button>
            </div>
            // </div>
            // </div>
            
       
        
    );
};

export default Product;