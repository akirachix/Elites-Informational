import './index.css';
import facebook from '../Images/facebookicon.svg';
import linkedin from '../Images/linkedinicon.svg';
import instagram from '../Images/instagramicon.svg';
import twitter from '../Images/twittericon.svg';
import umuhinzilogo from '../Images/umuhinziicon.png'
import location from '../Images/location.svg';
import telephone from '../Images/telephone.svg';
import email from '../Images/email.svg';
import teafarm from '../Images/tea_farm.jpg';
import ussd from '../Images/ussd-illustrations.png';
import laptops from '../Images/laptops.png';



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
            <img src={instagram} alt="" className="icons"/>
            </div>
            
            <div>
            <img src={facebook} alt="" className="fbIcons"/>
            </div>
            
            <div> 
            <img src={linkedin} alt="" className="icons"/>
            </div>
            
            <div>
            <img src={twitter} alt="" className="twitterIcons"/>
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
            <img src={telephone} alt="" className="phonepin"/>
            <p>+ 25412345678</p>
            </div>
           
           <div className="contacts">
           <img src={email} alt= "" className="pins"/>
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
//        <div className="footer">
//          {/* <div> */}

//             <div className="logoprofile">
//                 <div>
//                 <img src= {umuhinzilogo} alt="umuhinzilogo"/>
//                 </div>
                
//                 <div>
//                 {/* <h2>Umuhinzi</h2> */}
//             <p>This platform is meant to empower you to make decisions based on knowledge.<br></br>Knowldge is power, do not be left behind.</p>
//                 </div>

//                 <div className="logos">         
//             <h2>Social Media</h2>
//             <div>
          
//             <img src={instagram} alt="instagram icon" className='igIcons'/>
//             </div>

//             <div>
//             <img src={facebook} alt='facebook icon' className='fbIcons'/>
//             </div>
           
//            <div>
//            <img src={linkedin} alt='linkedin icon' className='icons'/>
//            </div>

//            <div>
//            <img src={twitter} alt='twitter icon' className='twitterIcons'/>
//            </div>
          
//  </div>
            
//             </div>
            
//          <div>
//             <h2>Explore</h2>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Our team</li>
//             <li>Mission and Vision</li>
//          </div>
      
//          <div>
//             <h2>Contacts</h2>
//             <li>+ 25412345678</li>
//             <li>c@elites.com</li>
//          </div>   

//          <div>
//             <h2>Gallery</h2>
//             <img src={teafarm} alt=""/>
//             <img src={ussd} alt=""/>
//             <img src={laptops} alt=""/>
//             </div>         
//        </div>
  