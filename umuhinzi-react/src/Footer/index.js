import './index.css';
import umuhinzilogo from '../Images/umuhinziicon.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {CiPhone} from 'react-icons/ci';
import {MdEmail, MdLocationOn} from 'react-icons/md';


const Footer = ()=>{
    return(
       <div className="footer-container">
         <div>

         
         <div className="umuhinzidetails">
         <img src={umuhinzilogo} alt="" className="umuhinzi"/>
         <p className="content">This platform is meant to empower you<br></br> to make decisions based on knowledge.<br></br>Knowledge is power, do not be left behind.</p>
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
               <ul className='explorecontent'>
            <li><a href='home'>Home</a></li><br></br>
            <li><a href='about us'>About Us</a></li><br></br>
            <li><a href='our team'>Our Team</a></li><br></br>
            <li><a href='mission and vision'>Mission and Vision</a></li>
               </ul>
            
            </div> 
            
         </div>

         <div className="contacts-container">
            <h2 className="contactheading">Contacts</h2>

            <div className="contacts">
            <p> <MdLocationOn className='locationpin'/> Ndege Road, Karen, Nairobi, Kenya</p>
            </div>
            
            <div className="contacts">
            <p> <CiPhone className="phoneicon"/>  +25412345678</p>
            </div>
           
           <div className="contacts">
           <p><MdEmail id='emailicon'/>     elites@gmail.com</p>
           </div>
            
         </div>


     
       </div>

      )
   };
   
   export default Footer;   
  