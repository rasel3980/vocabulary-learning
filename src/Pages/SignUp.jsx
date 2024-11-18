import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { auth } from "../Firebase/Firebase.init";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = (event) => {
    event.preventDefault();
    const Email = event.target.email.value;
    const Password = event.target.password.value;
    const Name = event.target.name.value;
    const photoURL = event.target.url.value;
    console.log(Name,Email, Password,photoURL);
    setErrorMessage("");
    setSuccess(false);
    if (errorMessage.length < 6) {
      setErrorMessage("Password should be 6 character or longer");
      return;
    }
    const passwordReEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

    if (!passwordReEx.test(Password)) {
      setErrorMessage(
        "At least one upperCase,one lowerCase,one digit,one special character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold ml-14">SignUp now!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="url"
                name="url"
                placeholder="Photo-URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn absolute right-3 top-12 btn-xs"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}{" "}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <p className="ml-4 mb-4 mr-4">
            Already have an account? Please{" "}
            <button className="btn btn-sm bg-blue-600 text-white">
              <NavLink to="/login">Login</NavLink>
            </button>
          </p>
          {errorMessage && (
            <p className="text-red-600 text-lg">{errorMessage}</p>
          )}
          {success && (
            <p className="text-green-600 text-lg">SignUp Successfully</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
