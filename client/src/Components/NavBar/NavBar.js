import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../JS/Action/user'
import 'bootstrap/dist/css/bootstrap.min.css'



const NavBar = () => {
  const isAuth =useSelector(state=>state.userReducer.isAuth)


  const dispatch=useDispatch()

  return (
    <div >
     <Navbar expand="lg" className="bg-body-tertiary" >
      <Container >
        <Navbar.Brand href='/'>MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            {isAuth ? <Nav.Link href='/profile'>Profile</Nav.Link> : null}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href='/add'>ADD CONTACT</NavDropdown.Item>
              <NavDropdown.Item href="/contactlist">
                LIST CONTACT
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {isAuth ?
          (<div className="logout"><Nav.Link href='/'onClick={()=> dispatch(logout())}>LOGOUT</Nav.Link></div>)
          :
          (<div className='login'>
            <Nav.Link href='/Login'>LOGIN</Nav.Link>
            <Nav.Link href='/Register'>REGISTER</Nav.Link>
          </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;