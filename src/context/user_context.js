import React, { useContext } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { useSignOut } from "react-firebase-hooks/auth";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);

  const emailPasswordLogin = (email, passowrd) => {
    signInWithEmailAndPassword(email, passowrd);
  };
  const googleLogin = () => {
    signInWithGoogle();
  };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <UserContext.Provider
      value={{
        emailPasswordLogin,
        googleLogin,
        loading,
        loading2,
        error2,
        error,
        user,
        user2,
        signOutUser,
        createUserWithEmailAndPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
