import "./Navbar.css";
import Logo from "../Assets/Logo.png";


export default function Navbar() {
  return (
    <div className="navbar">
      <img className="Logo" src={Logo} alt="Logo" width={39} height={24}/>
      <p>Ace Global</p>
      <div className="list">
      <ul>
        <li>About Us</li>
        <li>Blog</li>
      </ul>
      
      </div>
      <div className="btn">
      <button style={{backgroundColor:"#290A38"}}> Sign Up</button>
      <button style={{backgroundColor:"#6E00A1"}}>Log In</button>
      </div>
    
    </div>
  );
}
