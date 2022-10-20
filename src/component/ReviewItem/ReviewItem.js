import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ product, handelRemoveItem }) => {
    const { id, name, img, price, quantity, shipping } = product;
    return (
        <div className="flex flex-col items-center bg-gray-800 rounded-lg border shadow-md md:flex-row hover:drop-shadow-2xl dark:border-gray-700 dark:bg-gray-800 relative">

            <img className="object-cover w-full h-96 md:h-auto md:w-48 rounded-xl p-2" src={img} alt="" />
            <div className="flex flex-col justify-between px-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Price: <span className='text-amber-400'>${price}</span></p>
                <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Shipping Charge: <span className='text-amber-400'>${shipping}</span></p>
                <h5 className="text-xl font-semibold tracking-tight text-gray-200 dark:text-white">Quantity: <span className='text-amber-400 text-2xl font-bold'>{quantity}</span></h5>
            </div>
            <button onClick={() => handelRemoveItem(id)} className='absolute right-10 '><FontAwesomeIcon size='w-7 h-7' className='drop-shadow-xl text-red-600 hover:text-red-700' icon={faTrashCan} /></button>
        </div>
    );
};

export default ReviewItem;