import './index.css';
import umuhinzilogo from '../Images/umuhinziicon.png'
import location from '../Images/location.svg';
import email from '../Images/email.svg';
import teafarm from '../Images/tea_farm.jpg';
import ussd from '../Images/ussd-illustrations.png';
import laptops from '../Images/laptops.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';




const Footer = ()=>{
    return(
       <div className="footer">
         <div className="first">

         
         <div className="text">
         <img src={umuhinzilogo} alt="" className="umuhinzi"/>
         <p className="content">This platform is meant to empower you<br></br> to make decisions based on knowledge.<br></br>Knowldge is power, do not be left behind.</p>
         </div>
         
         <div className="socialmedia">
            <div>
               <FaInstagram className='icons' />
            </div>
            
            <div>
               <FaFacebook className='icons'/>
                       </div>
            
            <div> 
            <FaLinkedin className='icons' />
            </div>
            
            <div>
            <FaTwitter className='icons'/>
            </div>
            
         </div>
         </div>

         <div className="explore">
            <h2 className="exploretext">Explore</h2>

            <div className="explorecontent">
            <li>Home</li><br></br>
            <li>About Us</li><br></br>
            <li>Our Team</li><br></br>
            <li>Mission and Vision</li>
            </div>
            
         </div>

         <div className="contactstext">
            <h2 className="contactheading">Contacts</h2>

            <div className="contacts">
            <img src={location} alt="" className="pins"/>
            <p>Ndege Road, Karen, Nairobi, Kenya</p>
            </div>
            
            <div className="contacts">
               <FaPhoneAlt className='phonepin'/>
            {/* <img src={telephone} alt="" className="phonepin"/> */}
            <p>+ 25412345678</p>
            </div>
           
           <div className="contacts">
           <img src={email} alt= "" className="email"/>
           <p className="gmail">elites@gmail.com</p>
           </div>
            
         </div>

         <div>
            <h2 className="gallerytext">Gallery</h2>
       <div className="pics">
         <div>
         <img src={teafarm} alt="" className="tea_farm"/>
         </div>
     
     <div>
     <img src={ussd} alt="" className="ussdpic"/>
     </div>

     <div>
     <img src={laptops} alt=""className="laptop"/>
     </div>
            
         </div>     
           
           
         </div>

     
       </div>

      )
   };
   
   export default Footer;   
  