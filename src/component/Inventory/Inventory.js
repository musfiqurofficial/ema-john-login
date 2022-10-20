import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Inventory = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <span>Owner of this Shop: {user?.displayName}</span><br />
            <span>Owner of this Shop: {user?.email}</span>
        </div>
    );
};

export default Inventory; <h1>This is Our Inventory page</h1>