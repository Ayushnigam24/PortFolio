import { NavLink } from "react-router-dom";
const Navbar=()=>{
return<>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Ayush Nigam
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
         <li className="nav-item">
             <NavLink className="nav-link  fw-bold  text-white " to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  fw-bold  text-white " to="/services">Skill</NavLink>
            </li>

            <li className="nav-item">
           
              <NavLink className="nav-link  fw-bold  text-white " to="/about">About</NavLink>
            
            </li>
             <li className="nav-item">
           
              <NavLink className="nav-link  fw-bold  text-white " to="/education">Education</NavLink>
            
            </li>
            <li className="nav-item">
           
              <NavLink className="nav-link  fw-bold  text-white " to="/project">Project</NavLink>
            
            </li>
            <li className="nav-item">
           
              <NavLink className="nav-link  fw-bold  text-white " to="/contact-us">Contact</NavLink>
            
            </li>
      </ul>
    </div>
  </div>
</nav>


</>
}
export default Navbar;