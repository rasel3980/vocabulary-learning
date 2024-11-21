import React, { useContext } from 'react';
import { authContext } from '../Components/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom'; 

const Profile = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate(); 

  const handleUpdateProfile = () => {
    navigate('/update-profile');
  };

  return (
    <div className="w-[400px] h-auto my-10  bg-gray-100 rounded-xl shadow-xl mx-auto p-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <img className="w-24 h-24 rounded-full border-4 border-gray-300" src={user.photoURL} alt="Profile" />
        </div>
        <p className="text-xl font-semibold text-gray-800">{user.displayName}</p>
        <p className="text-lg text-gray-800">{user.email}</p>
      </div>
      <div className="mt-6 text-center">
        <button 
          onClick={handleUpdateProfile} 
          className="btn bg-blue-500 text-white font-bold hover:bg-blue-600 w-full py-2 rounded-lg">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
