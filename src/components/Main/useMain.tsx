import { useState, useEffect } from 'react';
import axios from "axios";
import {requests} from "../../Request";

interface IMainProps {
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

export const UseMain = () => {
    const [movies, setMovie] = useState<IMainProps[]>([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response) => {
            setMovie(response.data.results)
        })
    },[])

    return movie
}
