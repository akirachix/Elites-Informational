import './index.css';
import app from '../Images/app.jpeg';
import ussd from '../Images/ussd.png';

 
function Products(){
    return(
       
        <div className='products'>
            <h1 className ='heading'>Products</h1>

            <div className="webapp">

            <div className ="productbody">
            <h5 className ='webtitle'>Umuhinzi Web App</h5>
            <img className = 'webimg'src={app} alt='app img'/>
            </div>

            <div className = 'textweb'>
            
            <p className="info">Our products will show current market prices 
          for different farming inputs,past purchases
          and transaction history and update market pricing</p>
            </div>
            </div>
            
           
           
          <div className='ussd'>
          
          <div className='ussdinfo'>
          <div >
            <h3 className='app'>USSD</h3>
            </div>
              <p className='ussdtext'>Umuhinzi is a USSD platform that helps smallholder farmers have access to input and information to boost their productivity and to be market ready</p>

            
            <img src={ussd} alt='ussd' className='ussdimg'/>
            </div>
              
           </div>
            </div>
    )
  }
      
    export default Products