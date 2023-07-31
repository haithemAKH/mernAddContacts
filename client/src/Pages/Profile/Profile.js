import React from 'react'
import {Card} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Profile.css';
const Profile = () => {
    const user =useSelector((state)=>state.userReducer.user);
  return (
    <div className='profile'>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        <Card.Body>
          <Card.Title>{user && user.name}</Card.Title>
          <Card.Text>{user && user.email}</Card.Text>
          <Card.Text>{user && user.phone}</Card.Text>
          <Card.Text>{user && user.role}</Card.Text>
        </Card.Body>
      </Card>
        </div>
    </div>
  )
}

export default Profile