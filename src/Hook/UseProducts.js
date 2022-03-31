import { useEffect, useState } from "react"

const UseProducts = () =>{

    const [products , setproducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])

    return [ products , setproducts ]
}

export default UseProducts;