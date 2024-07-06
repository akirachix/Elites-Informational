import './index.css';
import umuhinzilogo from '../Images/umuhinziicon.png'
import location from '../Images/location.svg';
import email from '../Images/email.svg';
import telephone from '../Images/telephone.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';




const Footer = ()=>{
    return(
       <div className="container">
         <div className="first-set">

         
         <div className="text">
         <img src={umuhinzilogo} alt="" className="umuhinzi"/>
         <p className="content">This platform is meant to empower you<br></br> to make decisions based on knowledge.<br></br>Knowldge is power, do not be left behind.</p>
         </div>
         
         <div className="socialmedia">
           
            
            <div className='icons'>
               <FaFacebook/>
             </div>
            
            <div className='icons'> 
            <FaLinkedin />
            </div>
            
            <div className='icons'>
            <FaTwitter/>
            </div>

            <div className='icons'>
               <FaInstagram/>
            </div>
            
         </div>
         </div>

         <div className="explore-container">
            <h2 className="explore-heading">Explore</h2>

            <div className="explorecontent">
            <li>Home</li><br></br>
            <li>About Us</li><br></br>
            <li>Our Team</li><br></br>
            <li>Mission and Vision</li>
            </div>
            
         </div>

         <div className="contacts-container">
            <h2 className="contactheading">Contacts</h2>

            <div className="contacts">
            <img src={location} alt="" className="pins"/>
            <p>Ndege Road, Karen, Nairobi, Kenya</p>
            </div>
            
            <div className="contacts">
               {/* <FaPhoneAlt className='phonepin'/> */}
             <img src={telephone} alt="" className="pins"/> 
            <p>+ 25412345678</p>
            </div>
           
           <div className="contacts">
           <img src={email} alt= "" className="pins"/>
           <p className="gmail">elites@gmail.com</p>
           </div>
            
         </div>


     
       </div>

      )
   };
   
   export default Footer;   
  