import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteContact } from '../../JS/Action/Contact';


const ContactCard = ({Contact}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Contact.name}</Card.Title>
        <Card.Text>{Contact.email}</Card.Text>
        <Card.Text>{Contact.phone}</Card.Text>
        <Button variant="success" onClick={()=>navigate(`/edit/${Contact.id}`)}>Edit</Button>
        <Button variant="danger" onClick={()=>dispatch(deleteContact(Contact.id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard