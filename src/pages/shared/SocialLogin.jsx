import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center mb-5">
        <button onClick={handleGoogleSignIn} className="btn">
          Signin with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
