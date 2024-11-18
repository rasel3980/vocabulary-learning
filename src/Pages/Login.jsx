import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.init';
import { FcGlobe, FcGoogle } from "react-icons/fc";

const Login = () => {
    const [errorMessage,setErrorMessage]=useState('')
    const[success,setSuccess]= useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIN = ()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log('ERROR',error);
        })
    }
    const handleLoginForm = (event)=>{
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        console.log(Email,Password);
        setErrorMessage('')
        setSuccess(false)
        if(errorMessage.length<6){
            setErrorMessage('Password should be 6 character or longer');
            return;
        }
        const passwordReEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

        if(!passwordReEx.test(Password)){
            setErrorMessage('At least one upperCase,one lowerCase,one digit,one special character')
            return;

        }

        signInWithEmailAndPassword(auth,Email,Password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true)
        })
        .catch(error=>{
            console.log("ERROR",error);
            setErrorMessage(error.message)
            setSuccess(false)
        })
       
    }
    return (
        <>
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-5">
    <h1 className="text-3xl font-bold ml-14">Login now!</h1>
      <form onSubmit={handleLoginForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':'password'} 
          name='password' 
          placeholder="password" 
          className="input input-bordered" required />
          <button onClick={()=>setShowPassword(!showPassword)} 
          className='btn absolute right-3 top-12 btn-xs'>
             {
                showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
             } </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='ml-5 mb-5 mr-3'>New to this website? Please <button className='btn btn-sm bg-blue-600 text-white'><NavLink to="/signUp">SignUp</NavLink></button></p>
      <div className='flex justify-center items-center'>
      <button onClick={handleGoogleSignIN} className='flex items-center justify-center'> <FcGoogle size={40} ></FcGoogle>Login with Google</button>
      </div>
      {
        errorMessage && <p className='text-red-600 text-lg'>{errorMessage}</p>
      }
      {
        success && <p className='text-green-600 text-lg ml-16'>Login Successfully</p>
      }
    </div>
    
  </div>
  
</div>

</>
    );
};

export default Login;