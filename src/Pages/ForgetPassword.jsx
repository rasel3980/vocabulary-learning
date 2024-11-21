import React, { useContext, useState } from "react";
import { authContext } from "../Components/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgetPassword = () => {
  const { ForgetPassword } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(false);
  const [success,setSuccess] = useState(false)

  const handleForgetPassword = (e) => {
    e.preventDefault();
    setSuccess(false)
    const Email = e.target.email.value
    ForgetPassword(Email)
      .then(() => {
        // console.log('forget successfully');
        setSuccess(true);
      })
      .catch((error) => {
        // console.log("ERROR", error);
      });
  };
  return (
    <div className="w-[500px] mx-auto bg-white shadow-xl p-8">
      <form onSubmit={handleForgetPassword} className="card-body">
        <div className="form-control">
          <h1 className="text-3xl font-bold ml-10">Forget Password!</h1>
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
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Reset Password</button>
        </div>
        {
            success && (
                <p className="text-green-500">Password reset email sent successfully</p>
            )
        }
      </form>
    </div>
  );
};

export default ForgetPassword;
