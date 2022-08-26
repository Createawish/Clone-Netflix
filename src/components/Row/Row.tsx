import React, {useEffect, useState} from 'react';
import axios from "axios";

import {IMainProps} from "../Main/useMain";
import {IMAGE_SCROLL_URL} from "../../constants/contstants";

interface RowProps {
    title:string,
    fetchURL:any

}

export const Row = ({title,fetchURL}:RowProps):JSX.Element => {
    const [movies, setMovie] = useState<IMainProps[]>([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) =>{
            setMovie(response.data.results)
        })
    },[fetchURL])

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

