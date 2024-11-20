import React, { useContext } from 'react';
import { authContext } from '../Components/AuthProvider/AuthProvider';

const Profile = () => {
    const contextValue = useContext(authContext);
    console.log(contextValue);
    return (
        <div>
            my profile
        </div>
    );
};

export default Profile;