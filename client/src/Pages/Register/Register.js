
import React ,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { register } from '../../JS/Action/user'


const Register = () => {
    const [newUser,setNewUser]=useState({})
    console.log(newUser)
    const dispatch =useDispatch()
    const navigate= useNavigate()



    const handleChange =(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value})
    }

    const handleUser =(e)=>{
        e.preventDefault();
        //newUser.role ="client"
        dispatch(register(newUser));
        navigate('/Profile')
    }
    
  return (
    <div className='register'>
               <h1>Register User</h1>
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Enter name"  name= "name" onChange= {handleChange} />
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="Enter email"  name= "email" onChange= {handleChange} />
               <Form.Label>password</Form.Label>
               <Form.Control type="text" placeholder="Enter password"  name= "password" onChange= {handleChange} />
               <Form.Label>phone</Form.Label>
               <Form.Control type="text" placeholder="Enter phone number"  name= "phone" onChange= {handleChange} />
               <Link to='/Profile'><Button className='btn-register' variant="primary" type="submit" onClick={handleUser}>Register</Button></Link>
    </div>
  )
}

export default Register;