import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/wishlistSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()
  return (
    <div style={{marginTop:'150px',overflowX:"hidden"}}>
        <Row className='ms-5 ' >
           {
            data?.length>0?data?.map((product,index)=>(
              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3} >
              <Card className='shadow rounded'  style={{ width: '18rem',height:'27rem' }}>
            <Card.Img style={{padding:'10px'}} height={'200px'} variant="top" src={product?.thumbnail} />
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>
               <p>{product?.description.slice(0,55)}...</p>
               <h5>$ {product?.price}</h5>
              </Card.Text>
              <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'>
                   <i style={{color:'red'}} className="fa-solid fa-heart fa-lg "></i>
              </Button>
              <Button className='btn btn-light'>
                   <i className="fa-solid fa-cart-plus fa-lg text-success"></i>
              </Button>
              </div>
            </Card.Body>
          </Card>
          </Col>
            )):<p className='text-danger fw-bolder fs-4'> Nothing to Display!!!</p>
          }
        </Row>
    </div>
  )
}

export default Home