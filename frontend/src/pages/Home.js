import React from 'react';
import { Link } from 'react-router-dom';
import student_image from '../assets/student_image.png';
import './Home.css';
const Home = () => {
  const buttonData = [
    { label: 'Student', imageSrc: student_image },
    { label: 'Hostel Authority', imageSrc: student_image },
    { label: 'Proctor', imageSrc: student_image },
    { label: 'Parent', imageSrc: student_image },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {buttonData.map((button, index) => (
            <div key={index} className="column is-one-quarter">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={button.imageSrc} alt={`${button.label} Image`} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <Link to="/login" className="button is-fullwidth red-button">
                      {button.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomePage() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default HomePage;