import './index.css';
import mee from '../Images/mee.jpg';
import caren from '../Images/caren.jpg';
import tracy from '../Images/tracy.jpg';
import lnet from '../Images/lnet.png';
import myprofile from '../Images/myprofile.jpeg';

const Team = () => (
    <div className='Team'>
        <h2 id="heading">Our Team</h2>
        <div className='team'>
            <div>
          <img src= {mee} id='img1'/>
          <p className = "text"><b>Nyawargak Gatchang</b></p>
          </div>
          <div>
            <img src= {caren} id='img2'/>
            <p  className = "text"><b>Caren Chepng'etich</b></p>
            </div>
            <div>
            <img src= {tracy} id='img3'/>
            <p  className = "text"><b>Tracy Malonza</b></p>
            </div>
            <div>
            <img src= {lnet}id='img4'/>
            <p  className = "text"><b>Linet Mkandoe</b></p>
            </div>
            <div>
            <img src= {myprofile}id='img5'/>
            <p className = "text"><b>Christine Akinyi</b></p>
            </div>
            </div>
            </div>);
      export default Team
