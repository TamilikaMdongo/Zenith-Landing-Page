import { useState } from "react"; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const mobileLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    padding: '5px 0'
  };
  const getLinkStyle = () => {
    if (isOpen && window.innerWidth <= 1200) {
      return mobileLinkStyle;
    }
    return getLinkStyle;
  };
  return (
    <div className='navbar'>
      <div className="logo">Zenith</div>

<div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
  ☰
</div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
       <Link to={'/'} onClick={closeMenu}> <li> <a>About</a></li></Link>
       <Link to={'/'} onClick={closeMenu}><li>Features</li> </Link>
       <Link to={'/signup' }  onClick={closeMenu}> <li>Signup</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
