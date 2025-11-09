import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Components/AuthProvider/AuthProvider';

const UpdateProfile = () => {
  const { ManageProfile } = useContext(authContext); 
  const navigate = useNavigate(); 

  const [name, setName] = useState(''); 
  const [photoURL, setPhotoURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    ManageProfile(name, photoURL)
      .then(() => {
        navigate('/update profile');
      })
      .catch((error) => {
        console.error('Error updating profile: ', error);
      });
  };

  return (
    <div className="w-[400px] mx-auto bg-gray-100 rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="form-control">
          <label className="label">Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            className="input input-bordered w-full" 
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">Photo URL</label>
          <input 
            type="url" 
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)} 
            className="input input-bordered w-full" 
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">Update Information</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
