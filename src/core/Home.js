import React, {useState, useEffect} from 'react';
import { getProducts } from './helper/coreapicalls';



export default function Home(){

    const[products, setProducts]=useState([])  //products=box name & setProducts= method name to call it and add in box
    const [error,setError]=useState([false]) //by default, false is there is no error comes

    const loadAllProducts= () =>{
                getProducts().then(data => {
                    if(data.error){
                        setError(data.error);
                        console.log(error);
                    }
                    else{
                        setProducts(data);
                    }
                });
            };


    useEffect( () => {loadAllProducts();}, [])
    const returnedArray = Array.from(products)

    
    return(
        <div>
            <h1>Home compo</h1>
            <div classnm='row'>

            {returnedArray.map((product,index) => {                    
                        return(
                        <div key={index}>
                            <h1>
                                {product.name}
                            </h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}