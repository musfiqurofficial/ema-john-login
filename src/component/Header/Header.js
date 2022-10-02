import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='dark:bg-gray-800 dark:border-gray-700'>
            <div className='container mx-auto w-10/12 flex justify-center justify-between header'>
                <img src={logo} alt="" />
                <div className='aLink'>
                    <a href="/Order">Order</a>
                    <a href="/OrderReview">Order Review</a>
                    <a href="/ManageInventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;