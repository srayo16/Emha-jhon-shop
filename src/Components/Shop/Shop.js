import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hook/UseProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = UseProducts();
    useEffect( () =>{
        let getstorecart = getStoredCart();
        const savedCArt = [];
        for(const id in getstorecart){
            let addedproduct = products.find(pd => pd.id === id);
           
            if(addedproduct){
                let quantity = getstorecart[id];
                addedproduct.quantity = quantity;
                savedCArt.push(addedproduct);
        //    console.log(addedproduct);
            }
        }
        setCart(savedCArt);
    } , [products])

    const [cart , setCart] = useState([]);
    const addtoCart = (pd) => {
        let newCart = [];
        const exits = products.find(product => product.id === pd.id);
        if(!exits){
            pd.quantity = 1;
            newCart = [...cart , pd];
        }
        else{
            let rest = products.filter(product => product.id !== pd.id);
            exits.quantity += 1; 
            newCart = [...rest , exits];
        }
 



        setCart(newCart);
        addToDb(pd.id);
 
    }

    let clearCart = () =>{
        localStorage.removeItem('shopping-cart');
        window.location.reload();
    
    }
        return (
        <div className='hole-conto'>
            <div className="shop-conto container mt-5 pt-5">
            
        
            {
                products.map(pd => <Product pd={pd} addtoCart={addtoCart} key ={pd.id} ></Product>)
            }
           
            
        </div>
            <div className="cart-conto">
            <Cart cart = {cart} clearCart={clearCart}>
            <Link to="/order"><button className='buttu2 text-light text-decoration-none'>Review Order</button></Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;