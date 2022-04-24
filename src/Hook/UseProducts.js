import { useEffect, useState } from "react"

const UseProducts = () =>{

    const [products , setproducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])

    return [ products , setproducts ]
}

export default UseProducts;