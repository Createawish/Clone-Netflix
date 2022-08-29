import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


export const UseNavBar = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    console.log(user, 'user')
    const handleLogout = async () =>{
        try{
            await logout()
            navigate('/')
        }     catch (error) {
            console.log(error)
        }
    }
    return({user, handleLogout})
}