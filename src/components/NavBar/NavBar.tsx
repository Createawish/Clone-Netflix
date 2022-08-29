import React from 'react';
import {NavBarProps} from "./NavBarProps";
import {Link} from "react-router-dom";
import {UseNavBar} from "../../hooks/useNavBar";

export const NavBar = ({text}:NavBarProps):JSX.Element => {
   const {user, handleLogout} = UseNavBar()

    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute '>
            <Link to ='/'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>{text}</h1>
            </Link>
            {user?.email ? (
                <div>
                    <Link to='/account'>
                        <button className=' text-white pr-4'>Account</button>
                    </Link>
                    <Link to='/signup'>
                        <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
                    </Link>
                </div>
            ): (
                <div>
                    <Link to='/login'>
                    <button className=' text-white pr-4'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

