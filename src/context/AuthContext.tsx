import React, {createContext, useState, useEffect, useContext, ReactNode} from 'react';
import {auth,db} from '../firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore';


export interface AuthContextProviderProps {
    signup?:(email:string,password:string) => Promise<any>,
    login?: (email:string,password:string) => Promise<any>,
    logout?: () => Promise<void>,
    user?:any
}
type TAuthContextProvider = {
    children: ReactNode
}
 const AuthContext =createContext<any>(null)
export const AuthContextProvider = ({children}: TAuthContextProvider) => {
  const [user,setUser] = useState<any>(null)

    const signup = (email:string, password:string):any => {
         createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users', email), {
            savedShow: []
        })
        }
    const logout = (): Promise<void> => {
        return signOut(auth)
        }
        const login = (email:string,password:string): Promise<any> => {
            return signInWithEmailAndPassword(auth,email,password)
        }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
    return () => {
        unsubscribe()
    }
},[]);


    return(
    <AuthContext.Provider value={{login, logout, signup, user}}>
        {children}
    </AuthContext.Provider>
);
}
export function UserAuth() {
     return useContext(AuthContext)

}
