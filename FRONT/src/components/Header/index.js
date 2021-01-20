// import NPM
import React from 'react';
//import Utilitaire, modules
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import avatarPhoto from '../../assets/Images/avatar-header.jpg';
//import CSS
import './style.scss';
import Title from './Title';

const Header = () => (
  <div>
    je suis le header
  </div>
);

const Header = () => {
    return (   
        <Navbar className='Navbar' expand="lg"> 
        <Image src={avatarPhoto} alt="my-avatar" roundedCircle className='header-avatar' />
        <Navbar.Brand href="#home"> 
           <Title />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Button variant="primary"> Connecter-vous </Button>
        </Navbar.Collapse>
      </Navbar>      
    )
}


export default Header;
