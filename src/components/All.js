import flower from '../images/flower.jpg';
import { Container,  } from "react-bootstrap";

const All = () => {
   
   
    return (
    <>
           <Container>
               <div className='row text-center'>
                   <div className='col col-lg-5 col-md-3 col-sm-4'>
                   <img src={flower} alt=""  />

                   </div>
                   <div className='col col-lg-5 col-md-3 col-sm-4'>
                   <img src={flower} alt=""  />

                   </div>
                   <div className='col col-lg-5 col-md-3 col-sm-4'>
                   <img src={flower} alt=""  />

                   </div>
                   <div className='col col-lg-5 col-md-3 col-sm-4'>
                   <img src={flower} alt=""  />

                   </div>
               </div>
           </Container>


           
       </>
   )
}
export default All;