import './index.css';
import facebook from '../Images/facebookicon.svg';
import linkedin from '../Images/linkedinicon.svg';
import instagram from '../Images/instagramicon.svg';
import twitter from '../Images/twittericon.svg';
import umuhinzilogo from '../Images/umuhinziicon.png'



const Footer = ()=>{
    return(
       <div className="footer">
         {/* <div> */}

            <div className="logoprofile">
                <div>
                <img src= {umuhinzilogo} alt="umuhinzilogo"/>
                </div>
                
                <div>
                {/* <h2>Umuhinzi</h2> */}
            <p>This platform is meant to enmpower you</p>
            <p>to make decisions based on knowledge.</p>
            <p>Knowldge is power, do not be left behind.</p>
                </div>
            
            </div>
            
         <div>
            <h2>Navigate</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Our team</li>
            <li>Mission and Vision</li>
         </div>
         {/* </div> */}
         {/* <div> */}

         <div>
            <h2>Contacts</h2>
            <li>+ 25412345678</li>
            <li>+25412345678</li>
            <li>c@elites.com</li>
            <li>www.umuhinzi.com</li>
         </div>
         {/* </div> */}
         <div className="logos">            
            <h2 className="socialmedia">Social Media</h2>
            <div>
            <img src={instagram} alt="instagram icon" className='igIcons'/>
            </div>

            <div>
            <img src={facebook} alt='facebook icon' className='fbIcons'/>
            </div>
           
           <div>
           <img src={linkedin} alt='linkedin icon' className='icons'/>
           </div>

           <div>
           <img src={twitter} alt='twitter icon' className='twitterIcons'/>
           </div>
          
 </div>
       </div>
    )
};

export default Footer;