import {useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {IMainProps} from "./useMain";



interface MovieProps{
    item:IMainProps
}

export const UseMovie = ({item}:MovieProps) => {
    const [like, setLike] = useState<boolean>(false);
    const [saved,setSaved] = useState<boolean>(false)
    const {user} = UserAuth();

    const movieId = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await  updateDoc(movieId,{
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        } else {
            alert('Please log in to save a movie');
        }
    }
    return({saveShow,like})
}