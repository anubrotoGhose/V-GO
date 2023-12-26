import { Link } from "react-router-dom"
import vitlogo from'../assets/vitlogo.jpg'
import backbutton from '../assets/backbutton.png'
import vlogo from '../assets/vlogo.jpg'; 
import '../index.css'
const Navbar = () => {
    
    return(
        <div className="top-bar">
        <div className="back-button">
          <img src={backbutton} alt="Back" />
        </div>
        <div class="navbar">
          <div class="nbar">
          <ul>
              <li><a href="https://chennai.vit.ac.in/" class="nav-item">Home</a></li>
              <li><a href="https://chennai.vit.ac.in/about/contactus/" class="nav-item">Contact</a></li>
          </ul>
          </div>
        </div>   
        <div className="vlogo">
          <img src={vlogo} alt="Photo 1" />
          </div>
          <div className="vitlogo">
          <img src={vitlogo} alt="Photo 2" />
        </div>
      </div>
    )
}

export default Navbar