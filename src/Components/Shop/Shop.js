import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../../Hook/UseCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [cart , setCart] = UseCart();
    const [pdCount, setPdCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setproducts] = useState([]) 

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [page , size])

    useEffect(() => {
        fetch('http://localhost:5000/pdcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPdCount(pages);
            })
    }, [])
    console.log(pdCount);
   
    const addtoCart = (pd) => {
        let newCart = [];
        const exits = products.find(product => product._id === pd._id);
        if (!exits) {
            pd.quantity = 1;
            newCart = [...cart, pd];
        }
        else {
            let rest = products.filter(product => product._id !== pd._id);
            exits.quantity += 1;
            newCart = [...rest, exits];
        }




        setCart(newCart);
        addToDb(pd._id);

    }

    let clearCart = () => {
        localStorage.removeItem('shopping-cart');
        window.location.reload();

    }
    return (
        <div className='hole-conto'>
            <div className="shop-conto container mt-5 pt-5">


                {
                    products.map(pd => <Product pd={pd} addtoCart={addtoCart} key={pd._id} ></Product>)
                }


            </div>
            <div className="cart-conto">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to="/order"><button className='buttu2 text-light text-decoration-none'>Review Order</button></Link>
                </Cart>
            </div>
            <div className=' text-center container mt-5 mb-5 forselect'>
                {
                    [...Array(pdCount).keys()].map((number, index) => <button onClick={() => setPage(number + 1)} className={page === number + 1 ? 'selected' : ''} key={index}>{number + 1}</button>)
                }

                <select onChange={(e) => setSize(e.target.value)} >
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;