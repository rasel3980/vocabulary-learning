import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const GoogleLogin = () => {
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
    return (
        <div className="text-center mt-14">
            <button onClick={handleGoogleSignIN} className="btn">Login with Google</button>
        </div>
    );
};

export default GoogleLogin;