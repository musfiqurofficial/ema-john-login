import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearCart, children }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='mt-6 px-6 sticky top-0 mb-20'>
            <h2 className='text-2xl font-bold text-center mb-5'>Order Summery</h2>
            <p>Selected Items: <span className='text-xl font-semibold'>{quantity}</span></p>
            <p>Total Price <span className='text-xl font-semibold'>${total}</span></p>
            <p>Total Shipping Charge: <span className='text-xl font-semibold'>${shipping}</span></p>
            <p className='mb-5'>Tax: <span className='text-xl font-semibold'>${tax}</span></p>
            <p><span className='text-xl font-semibold'>Grand Total: ${grandTotal}</span></p>
            <button onClick={clearCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mt-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
            {children}
        </div>
    );
};

export default Cart;