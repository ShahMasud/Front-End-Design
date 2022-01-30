
import earth from '../images/earth.png';
import { Container } from 'react-bootstrap';


const Application = () => {

    return (
        <>
            <Container>
                <div className='row text-center'>
                    <div className='col col-lg-5 col-md-3 col-sm-4'>
                    <img src={earth} alt=""  />

                    </div>
                    <div className='col col-lg-5 col-md-3 col-sm-4'>
                    <img src={earth} alt=""  />

                    </div>
                    <div className='col col-lg-5 col-md-3 col-sm-4'>
                    <img src={earth} alt=""  />

                    </div>
                    <div className='col col-lg-5 col-md-3 col-sm-4'>
                    <img src={earth} alt=""  />

                    </div>
                </div>
            </Container>

           
</>
)
}
export default Application;