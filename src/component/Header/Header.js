import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='bg-gray-800 border-gray-700'>
            <div className='container mx-auto w-10/12 flex justify-center justify-between header'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className='aLink'>
                    <NavLink to="order">Order</NavLink>
                    <NavLink to="review">Order Review</NavLink>
                    <NavLink to="inventory">Manage Inventory</NavLink>

                    {
                        user?.uid ?
                            <NavLink onClick={logOut} to="login">Sign Out</NavLink>
                            :
                            <>
                                <NavLink to="login" >Login</NavLink>
                                <NavLink to="signUp">Sign Up</NavLink>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;