import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const menu = document.querySelector(".navbar-collapse");
    window.onscroll = () => {
      menu.classList.remove("show");
      document.querySelector(".navbar-toggler").ariaExpanded = "false";
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg sticky-top" id="home">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="./images/khaledlogo.svg" alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link p-lg-3 active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
