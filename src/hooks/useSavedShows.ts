import {useEffect, useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../firebase";


interface MovieItem{
    id: number
    img: string
    title: string
}


export const UseSavedShows = () => {
    const [movies,setMovie] = useState([]);
    const {user} = UserAuth()

    const sliderLeft = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight = () => {
        let slider:any = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(()=> {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovie(doc.data()?.savedShows)
        });
    }, [user?.email])

    const movieRef = doc(db, 'users' ,`${user?.email}`)
    const deleteShow = async (passedId:number) => {
        try{
            const result = movies.filter((item:MovieItem) => item.id !== passedId)
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error)
        }
    }
    return({deleteShow,sliderRight,sliderLeft,movies})
}