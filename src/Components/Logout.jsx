import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const Logout = () => {
    const {handleLogout} = useContext(authContext);
    return (
        <div>
            <button onClick={handleLogout} className='btn'>Logout</button>
        </div>
    );
};

export default Logout;