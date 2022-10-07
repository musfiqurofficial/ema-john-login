import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-gray-800 border-gray-700'>
            <div className='container mx-auto w-10/12 flex justify-center justify-between header'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className='aLink'>
                    <NavLink to="/order" href="/Order">Order</NavLink>
                    <NavLink to="/review" href="/OrderReview">Order Review</NavLink>
                    <NavLink to="inventory" href="/ManageInventory">Manage Inventory</NavLink>
                    <NavLink to="login" href="/Login">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;