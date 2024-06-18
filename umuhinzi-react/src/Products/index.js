import './index.css';
import app from '../Images/app.jpeg';
import ussd from '../Images/ussd.png';

 
function Products(){
    return(
       
        <div className='products'>
            <h1>Products</h1>
            <h3>Umuhinzi Web App</h3>
            <div className='webapp'>
           <div>
           <img src={app} alt='app img'/>
          </div>
          <div className='appinfo'>
           <p>Our products will show current market prices</p> 
          <p>for different farming inputs,past purchases</p>
          <p>and transaction history and update market pricing</p>
     </div>
          </div>
          <div className='ussd'>
          
          <div className='ussdinfo'>
          <div className='topic'>
            <h3>USSD</h3>
            </div>
              <p>Umuhinzi is a USSD platform that helps</p> 
              <p>smallholder farmers have</p>
              <p>access to input and information to boost their productivity</p>
              <p>and to be market ready</p>
            </div>
            
            <img src={ussd} alt='ussd' className='img'/>
              
           </div>
            </div>
        



          
       
    )
}
export default Products;