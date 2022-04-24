import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hook/UseProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = UseProducts();
    const [pdCount , setPdCount] = useState(0);

   useEffect(() =>{
       fetch('http://localhost:5000/pdcount')
       .then(res => res.json())
       .then(data => {
           const count = data.count;
          const pages = Math.ceil(count/10);
          setPdCount(pages);
       })
   } , [])
console.log(pdCount);
    useEffect( () =>{
        let getstorecart = getStoredCart();
        const savedCArt = [];
        for(const id in getstorecart){
            let addedproduct = products.find(pd => pd._id === id);
           
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
        const exits = products.find(product => product._id === pd._id);
        if(!exits){
            pd.quantity = 1;
            newCart = [...cart , pd];
        }
        else{
            let rest = products.filter(product => product._id !== pd._id);
            exits.quantity += 1; 
            newCart = [...rest , exits];
        }
 



        setCart(newCart);
        addToDb(pd._id);
 
    }

    let clearCart = () =>{
        localStorage.removeItem('shopping-cart');
        window.location.reload();
    
    }
        return (
        <div className='hole-conto'>
            <div className="shop-conto container mt-5 pt-5">
            
        
            {
                products.map(pd => <Product pd={pd} addtoCart={addtoCart} key ={pd._id} ></Product>)
            }
        
            
        </div>
            <div className="cart-conto">
            <Cart cart = {cart} clearCart={clearCart}>
            <Link to="/order"><button className='buttu2 text-light text-decoration-none'>Review Order</button></Link>
            </Cart>
            </div>
            <div className=' text-center container mt-5 mb-5'>
               {
                   [...Array(pdCount).keys()].map((number , index) => <button className='mx-2 btnCss' key={index}>{number + 1}</button>)
               }
           </div>
        </div>
    );
};

export default Shop;