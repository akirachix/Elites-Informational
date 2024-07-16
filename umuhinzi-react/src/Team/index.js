import './index.css';
import warga from '../Images/warga.jpg';
import caren from '../Images/caren.jpg';
import tracy from '../Images/tracy.jpg';
import linet from '../Images/linet.png';
import christine from '../Images/christine.jpeg';


const Team = () => {
  const teamMembers = [
    {
      name: 'Nyawargak Gatchang',
      image: warga,
      id: 'warga'
    },
    {
      name: 'Caren Chepngetich',
      image: caren,
      id: 'caren'
    },
    {
      name: 'Tracy Malonza',
      image: tracy,
      id: 'tracy'
    },
    {
      name: 'Linet Mkandoe',
      image: linet,
      id: 'linet'
    },
    {
      name: 'Christine Akinyi',
      image: christine,
      id: 'christine'
    }
  ];

  return (
    <div className='team-container'>
      <h2 id="heading-text">Our Team</h2>
      <div className='team'>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img src={member.image} id={member.id} />
            <p className="team-name"><b>{member.name}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;