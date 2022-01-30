import React from 'react';
import './Team.css';
import {Container, Card, Accordion, Row, Col, Carousel, Button } from 'react-bootstrap';
import { teamInfo } from './cardsInfo';
import kids from '../images/kids.jpg';
import { priceList } from './cardsInfo';

const Team = () => {

    const renderCard =(card, index) =>{
        return(
                 
                   <Card key={index} className='d-flex align-items-center p-5 '>  
                        <Card.Img variant="top" src={kids} />                 
                        <Card.Body className=''>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                  </Card>       
              )
          }

          const renderTeam =(card, index) =>{
            return(
                     
                       <Card key={index} className=' shadow '>  
                            {/* <div className='text-light bg-primary'>{card.title}</div> */}
                            <Card.Body className='bg-light teamCardsBody'>
                            <Card.Title className='mb-4 bg-primary title'>{card.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text className='mb-5'>{card.text}</Card.Text>
                            <Button  variant="primary">Primary</Button>
                            </Card.Body>
                      </Card>       
                  )
              }

  return (<>

    <Container fluid className='bg-light'>

        <div className='text-center pt-5'>
        <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">TEAM</a>
        <h1 className='fs-2 fw-bold'>Our Hardworking <span style={{color:"blue"}}>Team</span></h1>
        <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
        </div>

        <div className='d-flex text-center justify-content-center p-5 gap-2'> { teamInfo.map(renderCard)} </div>

        <div className='text-center pt-5 bg-white'>
        <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">PRICING</a>
        <h1 className='fs-2 fw-bold'>Check our <span style={{color:"blue"}}>Pricing</span></h1>
        <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
        </div>

        <div className='d-flex text-center justify-content-center p-5 gap-2 bg-white'> { priceList.map(renderTeam)} </div>

        <Container className='mb-5 pb-5'>
        <div className='text-center pt-5 mb-5'>
        <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">F.A.Q</a>
        <h1 className='fs-2 fw-bold'>Frequentlty asked <span style={{color:"blue"}}>Questions</span></h1>
        <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
        </div>

        <Accordion className=''>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Container>
    



    </Container>     
  </>
  )
};

export default Team;
