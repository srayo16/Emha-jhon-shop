import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const UseCart = () =>{
    const [cart , setCart] = useState([]);
    useEffect( () =>{
        const storedCart = getStoredCart();
        let saveCart = [];
      const keys = Object.keys(storedCart);
      console.log(keys);

      fetch('http://localhost:5000/bykeys' , {
          method: "POST",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(keys)
      })
      .then(res => res.json())
      .then(products => {
          console.log(products);
          for(const id in storedCart){
            let addCart = products.find(product => product._id === id);
            if(addCart){
                let quantity = storedCart[id];
                addCart.quantity = quantity;
                saveCart.push(addCart);
            }
            
        }
        setCart(saveCart);
      })
      
      
        
    } , [])
    return [cart , setCart]
}

export default UseCart;