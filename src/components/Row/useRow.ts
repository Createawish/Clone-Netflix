import {useEffect, useState} from "react";
import {IMainProps} from "../Main/useMain";
import axios from "axios";

export const UseRow = (url: string) => {
    const [movies, setMovie] = useState<IMainProps[]>([]);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setMovie(response.data.results)
            })
            .catch((e) => {
                console.error(e)
            })
    },[url])

    return movies
}
