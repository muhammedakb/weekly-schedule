import {
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

const AuthContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const login = async (email) => {
    return await sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:3000/confirm",
      handleCodeInApp: true,
    })
      .then(() => {
        // TODO: localStorage operations
        // localStorage.setItem("emailForSignIn", email);
        return true;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const loginLink = async (email, code) => {
    return await signInWithEmailLink(auth, email, code).then((result) => {
      setUser(result.user);
      return true;
    });
  };

  const logout = async () => {
    return await signOut(auth).then(() => {
      setUser(null);
    });
  };

  const updateUserInfos = async (displayName, photoUrl) => {
    return await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoUrl,
    })
      .then(() => true)
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any...
  // ... component that utilizes this hook to re-render with the...
  // ... latest auth object
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuth(false);
    });
    // cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isAuth,
    login,
    loginLink,
    logout,
    updateUserInfos
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuth && children}
    </AuthContext.Provider>
  );
};
