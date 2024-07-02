import './index.css';
import app from '../Images/app.jpeg';
import ussd from '../Images/ussd.png';

 
function Products(){
    return(
       
        <div className='products'>
            <h1 className ='heading'>Products</h1>
            <div className ="productbody">
              <div>
          <h5 className ='webtitle'>Umuhinzi Web App</h5>
            </div>
            <div className='webapp'>
              <div>
           <img className = 'webimg'src={app} alt='app img'/>
           </div>
          <div className='appinfo'>
           <p>Our products will show current market prices 
          for<br/> different farming inputs,past purchases
          and transaction<br/> history and update market pricing</p>
     </div>
          </div>
          <div className='ussd'>
          
          <div className='ussdinfo'>
          <div >
            <h3 className='app'>USSD</h3>
            </div>
              <p>Umuhinzi is a USSD platform that helps
              smallholder<br/> farmers have
              access to input and information to <br/> boost their productivity
            and to be market ready</p>
            </div>
            
            <img src={ussd} alt='ussd' className='ussdimg'/>
            </div>
              
           </div>
            </div>
        



          
       
    )
}
export default Products;