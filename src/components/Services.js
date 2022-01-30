import React from 'react';
import {Container, Card, Row, Col, Carousel } from 'react-bootstrap';
import imag from '../images/bizland.jpg';
import cardInfo from './cardsInfo';

const Service = () => {

  

  const renderCard =(card, index) =>{
    return(
             
               <Card key={index} className='d-flex align-items-center p-5 '>                  
                    <Card.Img variant="top" className='cardImage' src={card.Image}/>
                    <Card.Title>{card.title}</Card.Title> 
                    <Card.Body className=''>
                    <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
              </Card>       
          )
      }

  return (
  <>
        <Container>

          <div className='text-center pt-5'>
            <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">SERVICES</a>
            <h1 className='fs-2 fw-bold'>Check our <span style={{color:"blue"}}>Services</span></h1>
            <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
          </div>
          
          <div className='d-flex text-center justify-content-center p-5 gap-2'> { cardInfo.map(renderCard)} </div>

          </Container>         
                  <Carousel >
                    <Carousel.Item interval={1000}>
                      <img style={{height:"500px",  opacity:'50%'}}
                        className="d-block w-100"
                        src={imag}
                        alt="First slide"
                      />
                      
                      <Carousel.Caption  style={{color:'blue'}}>
                      <img style={{width:"100px", height:"100px", alignItems:'start'}}
                        className=" rounded-circle"
                        src={imag}
                        alt="First slide"
                      />
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img style={{height:"500px", opacity:'50%'}}
                        className="d-block w-100"
                        src={imag}
                        alt="Second slide"
                      />
                      <Carousel.Caption style={{color:'blue'}}>
                      <img style={{width:"100px", height:"100px", alignItems:'start'}}
                        className=" rounded-circle"
                        src={imag}
                        alt="First slide"
                      />
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img style={{height:"500px", opacity:'50%'}}
                        className="d-block w-100"
                        src={imag}
                        alt="Third slide"
                      />
                      <Carousel.Caption style={{color:'blue'}}>
                      <img style={{width:"100px", height:"100px", alignItems:'start'}}
                        className=" rounded-circle"
                        src={imag}
                        alt="First slide"
                      />
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        
     
    
    </>
  );
}

export default Service;

