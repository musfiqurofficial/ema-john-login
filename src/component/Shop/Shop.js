import React, { useState } from 'react';
import { useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelAddToCart = (selectProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct);
        if (!exists) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectProduct.id)
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
            setCart(saveCart);
        }
    }, [products])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 '>
            <div className='container mx-auto w-10/12 grid lg:col-span-4 lg:grid-cols-3 md:col-span-3 md:grid-cols-2 gap-3 my-16 sm:my-10 md:my-10 lg:my-20 '>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className='bg-zinc-100	drop-shadow-lg'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;