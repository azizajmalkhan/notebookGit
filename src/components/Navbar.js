import {React, useEffect} from 'react'

import {
  Link,useLocation
} from "react-router-dom";
const Navbar = () => {

   let location = useLocation()
useEffect(() => {
console.log(location);

}, [location]);
    return (
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""} `} to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    )
}

export default Navbar

