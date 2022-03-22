import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect( ()  =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products])

    let [count , setCount] = useState(0)
    
    let addtoCart = () => setCount(count + 1);
    return (
        <div className='hole-conto'>
            <div className="shop-conto container mt-5 pt-5">
            {/* <div className="row container"> */}
        
            {
                products.map(pd => <Product pd={pd} addtoCart={addtoCart} key ={pd.id} ></Product>)
            }
           
            {/* </div> */}
        </div>
            <div className="cart-conto">
        <h5 className='titless mt-3 mb-5 pb-5'>Order summary</h5>
        <p className='gene'>Selected Items: {count} </p>
        <p className='gene'>Total Price: $1140</p>
        <p className='gene'>Total Shipping Charge: $5</p>
        <p className='gene'>Tax: $114</p>
        <h6 className='grand'>Grand Total: $1559</h6>
        <button className='buttu text-light mb-3 mt-5'>Clear Cart</button>
        <button className='buttu2 text-light'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;