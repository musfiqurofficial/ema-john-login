import React, { useState } from 'react';
import { useEffect } from 'react';
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

    const handelAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-5  md:grid-cols-4  sm:grid-cols-3 '>
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
                <div className='text-center my-6'>
                    <h2 className='text-2xl font-bold mb-5'>Order Summery</h2>
                    <p>Selected Items: <span className='text-xl font-semibold'>{cart.length}</span></p>
                    <p>Total Price <span className='text-xl font-semibold'>${cart.price}</span></p>
                    <p>Total Shipping Charge: <span className='text-xl font-semibold'>${cart.length}</span></p>
                    <p>Tax: <span className='text-xl font-semibold'>${cart.length}</span></p>
                    <span className='text-xl font-semibold'>Grand Total: ${cart.length}</span>
                </div>
            </div>
        </div>
    );
};

export default Shop;