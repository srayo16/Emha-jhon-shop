import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart);
    let sum = (previous , current) => previous + current.price * current.quantity;
    let total = cart.reduce(sum , 0);

    let quyanti = (previous , current) => previous + current.quantity;
    let quantity = cart.reduce(quyanti , 0);

    let sumship = (prev ,curr) => prev + curr.shipping * curr.quantity ;
    let totalShip = cart.reduce(sumship , 0);
    let taxsum = (total + totalShip);
    let tax = (taxsum / parseFloat('10%')).toFixed(2);
    let grand = taxsum + parseFloat(tax);
    return (
        <div className='forpos'>
        <h5 className='titless mt-3 mb-5 pb-5'>Order summary</h5>
        <p className='gene'>Selected Items: {quantity} </p>
        <p className='gene'>Total Price: $ {total}</p>
        <p className='gene'>Total Shipping Charge: $ {totalShip}</p>
        <p className='gene'>Tax: $ {tax}</p>
        <h6 className='grand'>Grand Total: $ {grand}</h6>
        <button className='buttu text-light mb-3 mt-5'>Clear Cart</button>
        <button className='buttu2 text-light'>Review Order</button>
        </div>
    );
};

export default Cart;