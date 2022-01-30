import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import Service from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import { Card } from 'react-bootstrap';
import img from '../images/bizland.jpg';
import { homeCardInfo } from './cardsInfo';
import { BsHeadphones } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
// import { hover } from '@testing-library/user-event/dist/hover';

const Home = () => {
    const renderCard =(card, index) =>{
        return(
                 
                   <Card key={index} className='col col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-10 p-5 cardBody'>                  
                        <BsHeadphones className='fs-5 text-info'/>
                        
                        <Card.Body className=''>
                        <Card.Title className='text-start'>{card.title}</Card.Title> 
                        <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                  </Card>       
              )
          }


    const myStyle={
        height: '80vh',
        width:'100%',
        backgroundImage: 'url('+img+')',
        backgroundSize: "cover",         
    }
  return (
      
      <>
         <Footer/>
        <Navbar/>
       <div className='container-fluid'>

            <div className='d-flex mb-5 align-items-center ps-5' style={myStyle}>
               <div>
               <h1 className='fw-bold'>Welcome to <span style={{color:"blue"}}>BizLand</span></h1>
                <h5 style={{color:'#626566'}}>We are the team of talented designers making websites with Bootstrap</h5>
                
                 <div className='d-flex align-items-center'>
                    <button type="button" className="btn btn-primary me-4">GET STARTED </button>
                    <div className='HomeBtn d-flex align-items-center'>
                    <span className='d-flex rounded-circle border border-primary border-2 align-items-center justify-content-center me-2 fs-5 text-primary' style={{width:'30px', height:'30px'}}><AiFillCaretRight/></span>
                    <span>Watch Video</span>
                    </div>
                 </div>
               </div>
            </div>
       
            <div className='row justify-content-center mb-5 gap-2'> { homeCardInfo.map(renderCard)} </div>

                
            </div>
            <About/>
            <Service/>
            <Portfolio/>
            <Team/>
            <Contact/>

      </>
     
  );
}

export default Home;

