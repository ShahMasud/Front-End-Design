import React from 'react';
import './About.css';
// import { aboutProgressBar } from './cardsInfo';
import { aboutCardInfo } from './cardsInfo';
import { BsHeadphones } from "react-icons/bs";
import img from '../images/bizland.jpg';
import iconOne from '../images/iconOne.jpg'
import { ProgressBar, Container, Card, Row, Col } from 'react-bootstrap';
import twit from '../images/twitter.jpg'

const About = () => {

  const renderCard =(card, index) =>{
    return(
             
               <Card key={index}   style={{ width: '18rem', background:'#d3dfef'}}>                  
                   <div className='rounded-circle text-center IMAGE mb-4'><BsHeadphones/></div>
                    <Card.Title className='fs-2'>{card.title}</Card.Title> 
                    <Card.Body className='cardBodies'>
                    <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
              </Card>       
          )
      }   



  const myStyle={
    backgroundColor: "#f0f7f9",  
    height:"100%",    
}
const percentage = 100;
const percentageTwo= 80;
const percentageThree = 90;


  return (
    <>
  <div className='container-fluid about-container p-5' style={myStyle}>

      <div className='text-center pt-5'>
        <a className=" btn shadow-sm fs-6 fw-bold btn-lg disabled mb-3" style={{color:'blue'}} role="button" aria-disabled="true">ABOUT</a>
        <h1 className='fs-2 fw-bold'>Find Out More <span style={{color:"blue"}}>About Us</span></h1>
        <p className="fs-5" style={{color:'#626566'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi eaque cupiditate.</p>
      </div>


    <div className='row p-2 m-5 '>
        <img src={img} alt="" className='col col-lg-6 col-md-12 col-sm-12 image' />
        <div className='col col-lg-6 col-md-12 col-sm-12'>
          <h3>Volumptatem dignissioms provident quasi corporis volumptates sit assumenda</h3>
          <p className='mb-5 fst-italic' style={{color:'#626566'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab laborum vitae veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab laborum vitae veniam.</p>
          
          <div className='d-flex gap-4 mb-4'>   
              <img src= {iconOne} className="rounded-circle shadow bg-white" style={{width:"70px", height:"70px", padding:"20px"}} alt="..."/>              
              <div className='d-flex flex-wrap'>
                <h5> Ullama laboris nisi ut aliquip consequat</h5> 
                <p style={{color:'#626566'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, reprehenderit?</p>
             </div> 
          </div>
          <div className='d-flex gap-4 mb-4'>   
              <img src= {iconOne} className="rounded-circle shadow bg-white" style={{width:"70px", height:"70px", padding:"20px"}} alt="..."/>              
              <div className='d-flex flex-wrap'>
                <h5> Ullama laboris nisi ut aliquip consequat</h5> 
                <p style={{color:'#626566'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, reprehenderit? adipisicing elit. Adipisci, reprehenderit?</p>
             </div> 
          </div>

          <p style={{color:'#626566'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere eum adipisci sapiente rem deleniti quo doloremque placeat quasi libero! Cumque facere eum adipisci sapiente rem deleniti quo doloremque placeat quasi libero!</p>
        </div>
    </div>

  </div>





  <div className='row progressBar d-flex justify-content-around'>
      <div className='col col-lg-5 col-md-5 col-sm-10'>
        
         <div className='d-flex'> <span>Html</span>
         <span className='ms-auto'>100%</span></div>
        <ProgressBar now= {percentage}/>

      </div>
      <div className='col col-lg-5 col-md-5 col-sm-10'>
      <div className='d-flex'> <span>PHP</span>
         <span className='ms-auto'>80%</span></div>
       <ProgressBar now= {percentageTwo}/>

      </div>
      <div className='col col-lg-5 col-md-5 col-sm-10'>
        
         <div className='d-flex'> <span>Html</span>
         <span className='ms-auto'>90%</span></div>
        <ProgressBar now= {percentageThree} />

      </div>
      <div className='col col-lg-5 col-md-5 col-sm-10'>
      <div className='d-flex'> <span>Html</span>
         <span className='ms-auto'>90%</span></div>
       <ProgressBar now= {percentageThree}/>

      </div>
    </div>

    {/* <div className='d-flex text-center justify-content-center p-5 gap-2'> { aboutProgressBar.map(renderProgressBar)} </div> */}

    <div className='d-flex text-center justify-content-center p-5 gap-2'> { aboutCardInfo.map(renderCard)} </div>



  <div className='row logos text-center mb-4 ps-4 pe-4'>
    <div className='col col-lg-2 col-md-2 col-sm-4'>
   <img className='twitter' src={twit} alt=""/>

    </div>
    <div className='col col-lg-2 col-md-2 col-sm-4'>
    <img className='twitter' src={twit} alt=""/>

    </div>
    <div className='col col-lg-2 col-md-2 col-sm-4 mb-2'>
    <img className='twitter' src={twit} alt=""/>
    

    </div>
    <div className='col col-lg-2 col-md-2 col-sm-4'>
    <img className='twitter' src={twit} alt=""/>

    </div>
    <div className='col col-lg-2 col-md-2 col-sm-4'>
    <img className='twitter' src={twit} alt=""/>

    </div>
    <div className='col col-lg-2 col-md-2 col-sm-4'>
    <img className='twitter' src={twit} alt=""/>

    </div>

 </div>
 </>
  )
};

export default About;
