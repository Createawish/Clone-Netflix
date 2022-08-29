import React from 'react';
import {Link} from "react-router-dom";
import {UseLogin} from "../hooks/useLogin";

export const LogIn = () => {
    const {setEmail,error,setPassword,handleSubmit} = UseLogin()

    return (
        <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/45766de8-a846-4f62-9cbb-c2483021a5fd/BY-ru-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='curret-password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type='checkbox'/>Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>{' ' }
                                <Link to ='/signup'>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</>
    );
};

