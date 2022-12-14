import React from 'react';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {IMAGE_SCROLL_URL} from "../../constants/contstants";
import {AiOutlineClose} from 'react-icons/ai';
import {UseSavedShows} from "../../hooks/useSavedShows";


interface MovieItem{
    id: number
    img: string
    title: string
}


export const SavedShows = (): JSX.Element => {
    const {deleteShow,sliderRight,sliderLeft,movies} = UseSavedShows()
    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
    <div className='relative  flex items-center group'>
        <MdChevronLeft
            onClick={sliderLeft}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item:MovieItem, id) =>(
                <div key={id} className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
                    <img className='w-full h-auto block'
                         src={`${IMAGE_SCROLL_URL}${item?.img}`}
                         alt={item?.title}/>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-crenteritems-center h-full text-center'>{item?.title}</p>
                        <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
                    </div>
                </div>
            ) )}
        </div>
        <MdChevronRight
            onClick = {sliderRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
            </>
    );
};

