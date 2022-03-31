import React from 'react';
import UseCart from '../../Hook/UseCart';
import UseProducts from '../../Hook/UseProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products , setProducts] = UseProducts();
    const [cart , setCart] = UseCart(products);
    return (
        <div className='hole-conto'>
        <div className="review-conto container mt-5 pt-5">
        
        {
            cart.map(pd =>  <ReviewItem key={pd.id} pd={pd}></ReviewItem> )
        }
       
        
    </div>
        <div className="cart-conto">
        <Cart cart = {cart} ></Cart>
        </div>
    </div>
    );
};

export default Order;