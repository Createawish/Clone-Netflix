import React from 'react';
import {SavedShows} from "../components/SavedShows/SavedShows";

export const Account = () => {
    return (
       <>
           <div className='w-full text-white'>
               <img className=' w-full h-[400px] object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/45766de8-a846-4f62-9cbb-c2483021a5fd/BY-ru-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='/'/>
                    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
                    </div>
           </div>
           <SavedShows/>
           </>
    );
};

