import React from 'react';
import './about.css'; // Assuming your CSS file is named style.css
import jagrti from './images/jagrti.jpg'
import gaurav from './images/gaurav.jpg'
import Himanshu from './images/Himanshu.jpg'
// import Hardik from './images/Hardik.jpg'
import Bhavesh from './images/Bhavesh.jpg'
import Gargi from './images/Gargi.jpg'
import Hardik from './images/Hardik.jpg'



const AboutUs = () => {
  return (
    <div>
     

      <section className="about">
        <h1 className='name'>About Us</h1>
        <p style={{ fontWeight: 'bold' }}>Campus Innovations is a leading platform...</p>
        <div className="about-info">
          <div className="about-img">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824153359/371ba38b-8a03-4bff-916c-c3fa5396ceda.jfif" alt="Geeksforgeeks" />
          </div>
          <div>
            <p>
              If a common knowledge platform (with a facility for plagiarism) is created to bring all project works taken up at various levels by the students in Technical / Higher Educational Institutes and Universities throughout the country, then it will be a great source of knowledge and also will help the student community to take up unique/innovative project works Summary: An integrated platform should be developed where all the universities/Colleges provide information about the projects done by the students. The information on this platform will help in peer learning, and this will also help in cross-functional research between various universities/colleges. Objective: To develop an online integrated platform for projects taken up by the students of various universities/colleges.
            </p>
            <button>Read More...</button>
          </div>
        </div>
      </section>

      <section className="team">
        <h1 className='name'>Meet Our Team</h1>
        <div className="team-cards">
          {/* Cards here */}
          {/* Card 1 */}
          <div className="card">
            <div className="card-img">
              <img src={jagrti} alt="User 1" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Jagrati Pareek</h2>
              <p className="card-role">Team Lead</p>
              <p className="card-email">jagratipk@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-img">
              <img src={gaurav} alt="User 2" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Gaurav</h2>
              <p className="card-role">Team Member</p>
              <p className="card-email">khandelwalgaurav31@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-img">
              <img src={Himanshu} alt="User 3" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Himanshu Saini</h2>
              <p className="card-role">Team Member</p>
              <p className="card-email">b220456@skit.ac.in</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="card-img">
              <img src={Hardik} alt="User 2" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Hardik Gupta</h2>
              <p className="card-role">Team Member</p>
              <p className="card-email">Hardikjiio25@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card">
            <div className="card-img">
              <img src={Bhavesh} alt="User 2" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Bhavesh Lalwani</h2>
              <p className="card-role">Team Member</p>
              <p className="card-email">Bhaveshlalwani62@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card">
            <div className="card-img">
              <img src={Gargi} alt="User 2" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Gargi Gupta</h2>
              <p className="card-role">Team Member</p>
              <p className="card-email">Gargigupta0806@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
