
import './Portfolio.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import All from './All';
import Application from './Application';






const Portfolio = () => {

    const [pictures, setPictures] = useState("");

    const btnAll = () =>{
        setPictures(All);
    }

    const btnApp =()=>{
        setPictures(Application);
    }
        

  return(
   <> 
   
   <Container className='mb-5'>
        <div className='text-center pt-5'>
        <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">PORTFOLIO</a>
        <h1 className='fs-2 fw-bold'>Check our <span style={{color:"blue"}}>Portfolio</span></h1>
        <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
        </div>

       

        <div className='d-flex gap-4 justify-content-center fw-bold'>
            <NavLink activeclassName="menu_active" className="nav-link" to="/All"  onClick={btnAll}>All</NavLink>
            <NavLink activeclassName="menu_active" className="nav-link" to="/Application"  onClick={btnApp}>APP</NavLink>
            <NavLink activeclassName="menu_active" className="nav-link" to="/ALL"  onClick={btnAll}>CARD</NavLink>
            <NavLink activeclassName="menu_active" className="nav-link" to="/Application"  onClick={btnApp}>WEB</NavLink>
        </div>

        <Container>
         <div>{pictures}</div>
         
        </Container>

       
   </Container>

   </>
  )
};

export default Portfolio;
