import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {

  const [show, setShow] = useState(false);

  function showSwitch() {
    return setShow(!show);
  }

  return (
    <div className='navbar'>
      <div className='logo'>
     <h1> Ekunola Paul <i className="fab fa-react"></i></h1> 
      </div>
      <div className={show ? 'links active' : 'links'}>
        <Link onClick={()=> showSwitch()} to='/'>Home</Link>
        <Link onClick={()=> showSwitch()} to='/counter'>Counter</Link>
        <Link onClick={()=> showSwitch()} to='*'>404</Link>

        <Link onClick={()=> showSwitch()} to='/error'>Error Boundary</Link>
      </div>
      <div onClick={()=> showSwitch()} className={show ? 'bars-button active' : 'bars-button'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar