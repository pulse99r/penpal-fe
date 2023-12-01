import "../css/NavBar.css"
// import logo from "../img/reliable-penpal-logo.png"

function NavBar () {
  
  return (
    <div className="navbar-container">
      <div className="top-menu">Menu</div>
      <ul className="navbar">
        <li className='nav-item'>Home</li>
        <li className='nav-item'>Search</li>
        <li className='nav-item'>About Us</li>
        <li className='nav-item'>Gallery</li>
        <li className='nav-item'>Women</li>
        <li className='nav-item'>Men</li>
        <li className='nav-item'>FAQ's</li>
      </ul>
    </div>
    // </div>
  );
}

export default NavBar;