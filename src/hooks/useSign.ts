import {useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export const UseSign = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {signup} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try{
            await signup(email,password);
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return({handleSubmit,email,setEmail,password,setPassword})
}