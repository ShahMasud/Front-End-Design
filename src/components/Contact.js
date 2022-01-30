import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (<>
   <Container>
   <div className='text-center pt-5 mb-5'>
        <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">CONTACT</a>
        <h1 className='fs-2 fw-bold'><span style={{color:"primary"}}>Contact Us</span></h1>
        <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
        </div>
   </Container>

  </>)
};

export default Contact;
