import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=> {
            setProducts(data);
            setSearch(data);
            })
    },[])

    useEffect(()=>{
        const savedCart = getStoredCart();
        const saveCart = [];
       if(products.length){
        for(const key in savedCart){
            const addStoreCart = products.find(product => product.key === key)
            // console.log(key, addStoreCart)
            saveCart.push(addStoreCart);
        }
         setCart(saveCart);
       }
    },[products])
   
    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.key)

    }
    const handleSearch = event =>{
        const searchProduct = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
        setSearch(matchedProduct)

    }
    return (
       <div>
           <div className='search-container'>
               <input type="text" name="" placeholder='Search Your Products' onChange={handleSearch} id="" />
           </div>
           <h4>total product {search.length}</h4>
            <div className='shop-container'>
               
                <div className="shop-products">
                    {
                        search.map(product => <Product
                        key={product.key}
                        handleAddToCart={handleAddToCart}
                        product={product}
                        />)
                    }
                </div>
                <div className="shop-orderd">
                <Cart cart={cart}/>
                </div>

        </div>
       </div>
    );
};

export default Shop;