import './index.css';
import tea_farm from '../Images/tea_farm.jpg';
import umuhinzi_logo from '../Images/umuhinzi_logo.png';

const Navbar =()=>{
   return(
      
      <div className='navs'>
     
         <div className ='navbar'>
         <img className ='logo' src={umuhinzi_logo} alt='umuhinzi_logo'/>
         <li>Home</li>
         <li>About Us</li>
         <li>Mission</li>
         <li>Vision</li>
         <li>Products</li>
         <li>Our team</li>
         </div>
        
         
      <div className='landing_page'>
            <div className='text'>

           <h1>Empowering Agriculture</h1>
           <h1>for a SustainableFuture</h1>
           <div/>

         <div className='button'> 
         <button className='button_blue'>Join Now</button>
         <button className='button_white'>Learn More</button>
         </div> 
      </div>

        <div>
         <img className='farm_pic' src={tea_farm} alt='tea farm'/>
        </div>
    
      </div>
   

      </div> 
   )
   }
   export default Navbar;