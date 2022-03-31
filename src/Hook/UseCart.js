import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const UseCart = (products) =>{
    const [cart , setCart] = useState([])
    useEffect( () =>{
        const storedCart = getStoredCart();
        let saveCart = [];
        for(const id in storedCart){
            let addCart = products.find(product => product.id === id);
            if(addCart){
                let quantity = storedCart[id];
                addCart.quantity = quantity;
                saveCart.push(addCart);
            }
            
        }
        setCart(saveCart);
    } , [products])
    return [cart , setCart]
}

export default UseCart;