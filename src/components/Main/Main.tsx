import React from 'react';
import {IMAGE_URL} from "../../constants/contstants";
import {UseMain} from "./useMain"

export const Main = (): JSX.Element => {
    const movie = UseMain()

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black' ></div>
            <img className='w-full h-full object-cover' src={`${IMAGE_URL}/${movie?.poster_path}`} alt={movie?.title}/>
            </div>
        <div>
    <button>Play</button>
    <button>Watch Later</button>
        </div>
        </div>
    );
};

