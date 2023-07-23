import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import {getContact,editContact} from '../../JS/Action/Contact'
import { Helmet } from 'react-helmet'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Button'

const Edit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const match = useMatch('/edit/:id')
  const contactToGet = useSelector(state=>state.contactReducer.contactToGet)
  const [newContact,setNewContact]=useState({})
  const handleChange = (e)=> {
    setNewContact({...newContact,[e.target.name] : e.target.value})
  }
  useEffect(()=>{
    dispatch(getContact(match.params.id))
  })
  const handleEdit=()=>{
    dispatch( editContact (match.params.id , newContact))
    navigate(-1)
  }
  return (
    <div>
      <Helmet>
      <meta charSet='utf_8' />
            <title>EDIT</title>
            <link rel='canonical'/>
      </Helmet>
      
<Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder={`${contactToGet.email}`}  onChange= {handleChange} name='email' />
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder= {`${contactToGet.name}`}   onChange={handleChange} name= 'name' />
        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder= {`${contactToGet.phone}`}  onChange={handleChange} name='phone'  />
        <Button variant="primary" onClick={handleEdit}>EDIT</Button>
    </div>
  )
}

export default Edit