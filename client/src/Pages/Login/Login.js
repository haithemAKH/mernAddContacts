
import React, { useState } from "react";
import { Button,Form } from "react-bootstrap";
import{useDispatch} from "react-redux";
import{useNavigate} from 'react-router-dom';
import { login } from "../../JS/Action/user";



const Login = () =>{
    const [user,setUser]=useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlechange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }
    const handleUser=(e)=>{
        e.preventDefault();
        dispatch(login(user))
        navigate('/Profile')
        
    }
    return(
        <div >
               <h1>Login User</h1>
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="Enter email"  name= "email" onChange= {handlechange} />
               <Form.Label>password</Form.Label>
               <Form.Control type="text" placeholder="Enter password" name="password" onChange={handlechange} />

               <Button className='btn-login' variant="primary" type="submit" onClick={handleUser}>LOGIN</Button>
        </div>
    )
}

export default Login