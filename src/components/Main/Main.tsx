import React, {useEffect, useState} from 'react';
import {requests} from '../../Request';
import axios from "axios";
import {IMAGE_URL} from "../../constans/contstans";

 interface MainProps {
    adult:             boolean;
    backdrop_path:     HTMLImageElement;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}


export const Main = (): JSX.Element => {
    const [movies, setMovie] = useState<MainProps[]>([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

useEffect(()=>{
    axios.get(requests.requestPopular).then((response) => {
        setMovie(response.data.results)
    })
},[])
    console.log("movies", movies)
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

