import React from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../../Hook/UseCart';
import UseProducts from '../../Hook/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
const Order = () => {
    const [products , setProducts] = UseProducts();
    const [cart , setCart] = UseCart(products);
    // console.log(cart)
    let clearCart = () =>{
        localStorage.removeItem('shopping-cart');
        window.location.reload();
    
    }
    let deleteproduct = product => {
        let rest = cart.filter(pd =>pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return (
        <div className='hole-conto'>
        <div className="review-conto mt-5 pt-5">
        
        {
            cart.map(pd =>  <ReviewItem key={pd._id} pd={pd} deleteproduct={deleteproduct}></ReviewItem> )
        }
       
        
    </div>
        <div className="cart-conto">
        <Cart cart = {cart} clearCart={clearCart} > <Link to="/shipping"><button className='buttu2 text-light text-decoration-none'>Proceed Checkout</button></Link> </Cart>
        </div>
    </div>
    );
};

export default Order;