import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';


const Headers = () => {
  const {carts}=useSelector((state)=>state.allCart);
  
  return (
    <>
      <Navbar style={{height:"60px", backgroundColor:"black", color:"white"}}>
        <Container>
        
          <NavLink to="/" className="text-decoration-none text-light mx-2">
          <h2 className='text-light'>FoodCourt</h2>
          </NavLink>

          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
          <div id='ex4'>
            <span className='p1 fa-stack fa-2x has-badge ' data-count={carts.length}>
            <i class="fa-solid fa-cart-shopping"></i>
            
            </span>
          </div>
          </NavLink>
          
        </Container>
      </Navbar>  
    </>
  )
}

export default Headers