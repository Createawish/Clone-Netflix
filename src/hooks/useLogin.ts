import {useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


export const UseLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [error,setError] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const {login} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setError('')
        try{
            await login (email,password);
            navigate('/')

        } catch (error:any) {
            console.log(error);
            setError(error.message )
        }
    }
    return({setEmail,error,setPassword,handleSubmit})
}