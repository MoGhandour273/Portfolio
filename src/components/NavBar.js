import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useState } from "react";
import { useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  // const handleSetActive = (link) => {
  //   setActiveLink(link);
  // };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveLink(section.getAttribute("id"));
      }

    });

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);


  return (
    <>
      <nav className="navbar bg-dark  fixed-top main-navbar">
          
        <div className="navbar-brand logo">
          <a href="#about"><h2>Mohamed Elghandour</h2></a>
          <a onClick={() => setOpen(!open)} className='menu-icon'><IoMenu /></a>
        </div>
        <div className={ `main-container ${open ? "show" : ""}`} >
          <div className="collapse navbar-collapse links">
            <a
              className={activeLink === "home" ? "active" : ""}
              onClick={() => setActiveLink("home")}
              href="#about"
            >
              Home
            </a>
            <a
              className={activeLink === "projects" ? "active" : ""}
              onClick={() => setActiveLink("projects")}
              href="#projects"
            >
              Projects
            </a>
            <a
              className={activeLink === "skills" ? "active" : ""}
              onClick={() => setActiveLink("skills")}
              href="#skills"
            >
              Skills
            </a>
            <a
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => setActiveLink("contact")}
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
