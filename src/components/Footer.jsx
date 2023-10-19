import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='  d-flex justify-content-center align-items-center flex-column' style={{ width: '100%', height: '300px', backgroundColor:'pink' }}>
      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap ">
        <div style={{ width: '400px' }} className="website">
          <h4 style={{ textDecoration: 'none', color: 'black' }}><i className="fa-solid fa-truck-fast fa-sm me-2"></i>E-Cart</h4>
          <h6 style={{ textDecoration: 'none', color: 'black' }}>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
          <h6 style={{ textDecoration: 'none', color: 'black' }}>Code licensed Luminar, docs CC BY 3.0.</h6>
          <p > Currently v5.3.2.</p>
        </div>

        <div className="links d-flex flex-column" style={{ textDecoration: 'none', color: 'black' }}>
          <h4 style={{ textDecoration: 'none', color: 'black' }}>Links</h4>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'} >Home</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/cart'} >Cart</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/wishlist'} >WishList</Link>
        </div>

        <div className="guides d-flex flex-column" >
          <h4 style={{ textDecoration: 'none', color: 'black' }}> Guides</h4>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://react.dev/'} >React</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://react-bootstrap.github.io'} >React Bootstrap</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://reactrouter.com/en/main'} >Routing </Link>
        </div>

        <div className='contact'>
          <h4 >Contact Us</h4>
          <div className='boxx'>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter your Mail" aria-label="Enter your G-Mail" aria-describedby="basic-addon2"/>
                <span class="input-group-text bg-success text-dark" id="basic-addon2"><i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>
          <div className='icons mt-4 d-flex justify-content-center align-items-center'>
            <i className="fa-brands fa-linkedin me-3  fs-3" style={{ color: 'black' }}></i>
            <i className="fa-brands fa-twitter me-3  fs-3" style={{ color: 'black' }}></i>
            <i className="fa-brands fa-instagram me-3  fs-3" style={{ color: 'black' }}></i>
            <i className="fa-brands fa-facebook  fs-3" style={{ color: 'black' }}></i>
          </div>
        </div>
      </div>
      <p>Copyright © 2023 E-Cart. Built with React.</p>
    </div>
  )
}

export default Footer