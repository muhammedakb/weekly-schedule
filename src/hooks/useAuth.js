import {
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  // signInWithCredential,
  // linkWithCredential,
  // OAuthProvider,
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

  // Auth providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // TODO
  /*const authMergeAccounts = () => {
    const repo = new MyUserDataRepo();
  }*/

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

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        // ...
        setUser(user);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        const errors = [errorCode, errorMessage, email, credential];

        console.error(errors);
      });
  };

  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        // ...
        setUser(user);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GithubAuthProvider.credentialFromError(error);

        const errors = [errorCode, errorMessage, email, credential];

        console.error(errors);
      });
  };

  /*const loginWithTwitter = () => {
    // TODO
  }*/

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
    updateUserInfos,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuth && children}
    </AuthContext.Provider>
  );
};
