import React, { useContext } from 'react';
import { authContext } from '../Components/AuthProvider/AuthProvider';

const AboutUs = () => {
    const {handleGoogleLogin} = useContext(authContext);
    return (
        <div>
            <button onClick={handleGoogleLogin}>google login</button>
        </div>
    );
};

export default AboutUs;