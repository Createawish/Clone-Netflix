import React from 'react';
import {UseRow} from "./useRow";
import {Movie} from "../Movie/Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

interface IRowProps {
    title:string,
    fetchURL:string,
    rowId:string
}

export const Row = ({title,fetchURL,rowId}:IRowProps):JSX.Element => {
    const movies = UseRow(fetchURL);

    const sliderLeft = () => {
        let slider = document.getElementById('slider' + rowId);
        slider!.scrollLeft = slider!.scrollLeft - 500;
    }
    const sliderRight = () => {
        let slider = document.getElementById('slider' + rowId);
        slider!.scrollLeft = slider!.scrollLeft + 500;
    }

    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative  flex items-center group'>
                <MdChevronLeft
                    onClick={sliderLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) =>(
                        <Movie key={id} item={item}/>
                    ) )}
                </div>
                <MdChevronRight
                    onClick = {sliderRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </>
    );
};

