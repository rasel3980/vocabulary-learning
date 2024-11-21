import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const WelcomeMsg = () => {
    const {user} = useContext(authContext);
    return (
        <div className='text-center'>
            {
                user && (
                    <h1 className='text-2xl mt-2 font-bold text-[#4CAF50]'>Welcome {user.displayName}</h1>
                )
            }
        </div>
    );
};

export default WelcomeMsg;