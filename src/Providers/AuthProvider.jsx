import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import auth from "../firebase/firebase.confige";





export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

     // const [user, setUser] = useState(null);

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const signInUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     const userInfo = {
          // user,
          createUser,
          signInUser
     }
     return (
          <AuthContext.Provider value={userInfo}>
               {children}

          </AuthContext.Provider>
     );
};

export default AuthProvider;