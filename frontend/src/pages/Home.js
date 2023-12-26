import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import student_image from '../assets/student_image.png'
// const Home = () => {
//   return (
//     <div className="button-container">
//       <div className="button-box">
//         <div className="button-wrapper">
//         <img src={student_image} alt={` Image`} />
//           <Link to="/login">
//             <button className="horizontal-button">Student</button>
//           </Link>
//         </div>
//         <div className="button-wrapper">
//         <img src={hostel_image} alt={` Image`} />
//           <Link to="/login">
//             <button className="horizontal-button">Hostel Authority</button>
//           </Link>
//         </div>
//       <div className="button-wrapper">
//       <img src={proctor_image} alt={` Image`} />
//         <Link to="/login">
//           <button className="horizontal-button">Proctor</button>
//         </Link>
//       </div>
//       <div className="button-wrapper">
//       <img src={parent_image} alt={` Image`} />
//         <Link to="/login">
//           <button className="horizontal-button">Parent</button>
//         </Link>
//       </div>
//       </div>
//     </div>
//   );
// };



const Home = () => {
  const buttonData = [
    { label: 'Student', imageSrc: student_image },
    { label: 'Hostel Authority', imageSrc: student_image },
    { label: 'Proctor', imageSrc: student_image },
    { label: 'Parent', imageSrc: student_image },
  ];

  return (
    <div className="home-container">
      <div className="button-box">
        <div className="button-container">
          {buttonData.map((button, index) => (
            <div key={index} className="button-wrapper">
              <img src={button.imageSrc} alt={`${button.label} Image`} />
              <Link to="/login">
                <button className="horizontal-button">{button.label}</button>
              </Link>
            </div>
          ))}
        </div>
        </div>
    </div>
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