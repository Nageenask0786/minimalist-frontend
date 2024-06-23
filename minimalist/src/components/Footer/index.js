import { SiInstagram } from "react-icons/si";

import { FaYoutube ,FaTwitter,FaFacebookF,FaLinkedinIn} from "react-icons/fa6";



import './index.css'

const Footer = () => (
    <footer className="footer">
    <img src='https://res.cloudinary.com/dchxbofyt/image/upload/v1719055694/Frame_64_dqwrue.png' alt='footer-border'/>     
<div className='footer-content'>
   <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719056681/Frame_62_beyqwi.png" alt = "decorative frame"/>

   <div className='follow-us-container'>
        <h3 className='follow-us-heading'>Follow us on</h3>
        <div className='follow-us-icons-container'>
           <div className='icon-container'><SiInstagram color="#25A769" size={20}/></div>
           <div className='icon-container'><FaYoutube color="#25A769" size={20}/></div> 
           <div className='icon-container'><FaTwitter color="#25A769" size={20}/></div> 
           <div className='icon-container'><FaFacebookF color="#25A769" size={20}/></div> 
           <div className='icon-container'><FaLinkedinIn color="#25A769" size={20}/></div> 

        </div>
    </div>  
    <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719056681/Frame_62_beyqwi.png" alt = "decorative frame"/>

</div>  
    <img src='https://res.cloudinary.com/dchxbofyt/image/upload/v1719055694/Frame_64_dqwrue.png' alt='footer-border'/> 
    

    </footer>
)

export default Footer