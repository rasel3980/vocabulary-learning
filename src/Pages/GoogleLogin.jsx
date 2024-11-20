import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authContext } from "../Components/AuthProvider/AuthProvider";
import { auth } from "../Firebase/Firebase.init";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    // const {handleGoogleLogin} = useContext(authContext);

    // const provider = new GoogleAuthProvider();
    // const handleGoogleSignIN = ()=>{
    //     signInWithPopup(auth, provider)
    //     .then(result=>{
    //         console.log(result);
    //     })
    //     .catch(error=>{
    //         console.log('ERROR',error);
    //     })
    // }
    return (
        <div className="text-center mt-14">
            {/* <button onClick={handleGoogleSignIN} className='flex items-center justify-center'> <FcGoogle size={40} ></FcGoogle>Login with Google</button> */}
        </div>
    );
};

export default GoogleLogin;