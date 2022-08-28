import React, {createContext, useState, useEffect, useContext, ReactNode, FC} from 'react';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'


export interface AuthContextProviderProps {
    children?: ReactNode,
    signUp?:(email:string,password:string) => void,
    logIn?: (email:string,password:string) => void,
    logOut?: () => void,
    user?:any
}
interface UserProps extends AuthContextProviderProps{
  user?:any
}




 const AuthContext =createContext<AuthContextProviderProps|null>(null)
export const AuthContextProvider = ({children}:AuthContextProviderProps) :JSX.Element=> {
  const [user,setUser] = useState<any>({})

    const signUp = (email:string, password:string) => {
        return createUserWithEmailAndPassword(auth,email,password)
        }
    const logOut = () => {
        return signOut(auth)
        }
        const logIn = (email:string,password:string) => {
            return signInWithEmailAndPassword(auth,email,password)
        }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
    return () => {
        unsubscribe()
    }
},[]);


    return(
    <AuthContext.Provider value={{signUp,logIn, logOut, user}}>
        {children}
    </AuthContext.Provider>
);
}
export function UserAuth() {
     return useContext(AuthContext)

}