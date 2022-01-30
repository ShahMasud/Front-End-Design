import React from 'react'
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin, AiFillMobile } from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
const Footer = () => {
    return (
        <>

        <div className='row bg-primary text-white gap-5 p-2 justify-content-center'>
            <div className='col col-lg-5 d-flex justify-content-start gap-4 '>
                    <div className=''>
                    <AiOutlineMail className='me-2'/>
                    <span>shah83931@gmail.com</span>
                    </div>
                    <div>
                        <AiFillMobile className=''/>
                        0331-5806780
                    </div>

            </div>
            <div className='col col-lg-5 d-flex align-items-center justify-content-end  gap-4'>
                <AiOutlineTwitter/>
                <BsFacebook/>
                <AiOutlineInstagram/>
                <AiFillLinkedin/>

            </div>

        </div>
        </>
    )
}

export default Footer;