import React, {createContext, useState, useEffect, useContext, ReactNode} from 'react';



interface AuthContextProviderProps {
    children: ReactNode
}


 // @ts-ignore
const AuthContext =React.useContext<any>()
export const AuthContextProvider = ({children}:AuthContextProviderProps):JSX.Element=> {
return(
   <AuthContext.Provider>

)
}
export function UserAuth() {
     return useContext(AuthContext)

}