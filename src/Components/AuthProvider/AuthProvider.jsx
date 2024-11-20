import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);

  const handleSignUp = (Email, Password) => {
    return createUserWithEmailAndPassword(auth, Email, Password)
      
  }

  const handleLogout = ()=>{
    return signOut(auth)
  }
  const handleSignIN = (Email,Password)=>{
    return signInWithEmailAndPassword(auth,Email,Password)

  }
  const handleGoogleLogin = ()=>{
    return signInWithPopup(auth, provider)

  }

  const ManageProfile = (Name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName:Name, photoURL:photo
    });

    
  }
  const authInfo ={
    ManageProfile,
    handleGoogleLogin,
    handleLogout,
    handleSignUp,
    handleSignIN,
    user,
    setUser,
    
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser);
      if(currentUser){
        setUser(currentUser)
      }
      else{
        setUser(null)
      }

        return ()=>{
            unsubscribe();
        }
    })
  },[])

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
