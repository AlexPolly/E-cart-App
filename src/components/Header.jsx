import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import {  useSelector } from 'react-redux';



function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)


  return (
    <>
     <Navbar  expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5 z-1">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{ textDecoration: 'none',fontSize:'30px', fontWeight:'', color: 'white' }}><i style={{textShadow:'5px 5px 10px black'}} className="fa-solid fa-truck-fast text-light  me-2"></i><span style={{fontFamily:"Kaushan Script",textShadow:'5px 5px 10px black'}}>E-Cart</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border bg-light  rounded me-3'>
                <Link  to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                    <i style={{color:'red'}} className="fa-solid  fa-heart me-2"></i> Wishlist
                    <Badge className='m1-2 rounded text-dark mt-1' bg="light"> {wishlist.length}</Badge>
                </Link> 
            </Nav.Link>
            <Nav.Link className='btn border bg-light rounded '>
                <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                <i style={{color:'orange'}} className="fa-solid fa-cart-shopping me-2 "></i> Cart
                <Badge className='ms- rounded text-dark mt-1' bg="light"> {cart.length}</Badge>
                </Link> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header