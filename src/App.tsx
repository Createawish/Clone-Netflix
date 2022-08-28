import React from 'react';
import {NavBar} from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {AuthContextProvider} from "./context/AuthContext";
import {LogIn} from "./pages/LogIn";
import {SignUp} from "./pages/SignUp";
import {Account} from "./pages/Account";

function App() {
  return (
    <>
        <AuthContextProvider>
        <NavBar text='NETFLIX'/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/account' element={<Account/>}/>
        </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
