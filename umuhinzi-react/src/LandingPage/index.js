import tea_farm from '../Images/tea_farm.jpg';
import React from 'react';

const LandingPage = ()=>{
    return(
<div className='landing_page'>
<div>
<div className='text'>
  <h1>Empowering Agriculture</h1>
  <h1>for a Sustainable Future</h1>
</div>

<div className='button'>
  <div>
  <button className='joinnow'>Join Now</button>
  </div>
 
 <div>
 <button className='learnbutton'>Learn More</button>
 </div>

</div>
</div>

<div>
<img className='farm_pic' src={tea_farm} alt='tea farm' />
</div>
</div>
    );
}

export default LandingPage;