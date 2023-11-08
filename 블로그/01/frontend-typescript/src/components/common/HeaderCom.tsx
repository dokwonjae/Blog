// HeaderCom.tsx : rfce
import React from 'react'

function HeaderCom() {
  return (
    <>
     {/* <!-- ======= Header ======= --> */}
  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        {/* <img src="assets/img/me.jpg" alt="" className="img-fluid rounded-circle"/> */}
        <img src={require("../../assets/img/me.jpg")} alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Do Kwonjae</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://www.instagram.com/mr.___.do/" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://dobear.tistory.com/" className="github"><i className="bx bi-type-bold"></i></a>
          <a href="#" className="github"><i className="bi bi-person-wheelchair"></i></a>
          <a href="https://github.com/dokwonjae" className="github"><i className="bx bxl-github"></i></a>
          
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </div>
  </header>
  {/* <!-- End Header --> */}
    </>
  )
}

export default HeaderCom