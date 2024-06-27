import './index.css';
import app from '../Images/app.jpeg';
import ussd from '../Images/ussd.png';

 
function Products(){
    return(
       
        <div className='products'>
            <h1 className ='H1'>Products</h1>
            <div>
            <h3 className ='app'>Umuhinzi Web App</h3>
            </div>
            <div className='webapp'>
           <img className = 'webimg'src={app} alt='app img'/>
         
          <div className='appinfo'>
           <p>Our products will show current market prices 
          for<br/> different farming inputs,past purchases
          and transaction<br/> history and update market pricing</p>
     </div>
          </div>
          <div className='ussd'>
          
          <div className='ussdinfo'>
          <div className='topic'>
            <h4>USSD</h4>
            </div>
              <p>Umuhinzi is a USSD platform that helps
              smallholder<br/> farmers have
              access to input and information to <br/> boost their productivity
            and to be market ready</p>
            </div>
            
            <img src={ussd} alt='ussd' className='img'/>
              
           </div>
            </div>
        



          
       
    )
}
export default Products;