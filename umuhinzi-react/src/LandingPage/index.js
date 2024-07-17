import tea_farm from '../Images/tea_farm.jpg';
import React from 'react';

const LandingPage = ()=>{
    return(
<div className='landing_page'>
<div>
<div className='landing_page_text'>
  <h1>Empowering Agriculture
  for a Sustainable Future</h1>
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