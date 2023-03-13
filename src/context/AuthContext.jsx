import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile} from 'firebase/auth'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
const [user, setUser] = useState({})

function signUp(email, password, firstName, lastName) {
  return createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        return updateProfile(userCredential.user, {displayName: firstName + " " + lastName});
     });
}

  function logIn(email,password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function passReset(email) {
    return sendPasswordResetEmail(auth,email) ;
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  }) 
  return () => {
    unsubscribe();
  }; 
  });
  
  return (
  <AuthContext.Provider value={{signUp,user, logIn, logOut, passReset}}>
    {children}
  </AuthContext.Provider>
    ); 
  }
export function UserAuth() {
  return useContext(AuthContext);
}
