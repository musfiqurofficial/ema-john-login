import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    const handelRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 '>
            <div className='mx-auto w-8/12 grid lg:col-span-4 md:col-span-3 gap-3 my-16 sm:my-10 md:my-10 lg:my-20 '>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveItem={handelRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 className='text-2xl font-bold'>No Product Found!! <br />
                        <Link to='/'><button className='mt-5 px-8 py-3 bg-gray-800 text-white rounded-xl text-base font-semibold'>Go to</button></Link>
                    </h2>
                }
            </div>
            <div className='bg-zinc-100	drop-shadow-lg'>
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Order;