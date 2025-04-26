import people1 from '../assets/people.jpg';
import './AboutTeam.css';
const AboutTeam = () => {
  return (
    <div>
      <h1>Meet the Team!</h1>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={people1} alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">President</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={people1} alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Vice President</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={people1} alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Secretary</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
