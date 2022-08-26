import React from 'react';
import {UseRow} from "./useRow";
import {IMAGE_SCROLL_URL} from "../../constants/contstants";

interface IRowProps {
    title:string,
    fetchURL:string
}

export const Row = ({title,fetchURL}:IRowProps):JSX.Element => {
    const movies = UseRow(fetchURL)

    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative  flex items-center'>
                <div id={'slider'}>
                    {movies.map((item, id) =>(
                        <div className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={id}>
                            <img src={`${IMAGE_SCROLL_URL}${item?.backdrop_path}`} alt={item?.title}/>
                        </div>
                    ) )}
                </div>
            </div>
        </>
    );
};

