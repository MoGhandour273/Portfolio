import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import headerimg from "../assets/img/header-img.svg";
import project1 from "../assets/img/p1.png";
import project2 from "../assets/img/p2.png";
import project3 from "../assets/img/p3.png";
import project4 from "../assets/img/p4.png";
import skill1 from "../assets/img/html_logo.png"
import skill2 from "../assets/img/css_logo.png"
import skill3 from "../assets/img/js_logo.png"
import skill4 from "../assets/img/reactjs_logo.png"
import skill5 from "../assets/img/python.png"
import skill6 from "../assets/img/git_logo.png"
import skill7 from "../assets/img/github_logo.png"
import skill8 from "../assets/img/problem_logo.png"
import skill9 from "../assets/img/bootstrap_logo.png"
import contact from "../assets/img/contact-img.svg"
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { useEffec, useState } from "react";
function HomePage() {
  const skills = [
  { name: "HTML", img: skill1 },
  { name: "CSS", img: skill2 },
  { name: "Bootstrap", img: skill9 },
  { name: "JS", img: skill3 },
  { name: "React", img: skill4 },
  { name: "Python", img: skill5 },
  { name: "Git", img: skill6 },
  { name: "Github", img: skill7 },
  { name: "Problem solving", img: skill8 },
];
  return (
    <>
      <section id="home">
        <div className="Container about-container" id="about">
          <div className="discraption">
            <p className="p-welcome">Welcome to my Portfolio</p>
            <h1>Hi! I'm Mohamed Web Developer</h1>
            <p className="p-about">
              a passionate <span>Web Developer</span> with experience in{" "}
              <span> HTML, CSS, JavaScript, and Python. </span>I love building{" "}
              <span> interactive and responsive websites </span> and constantly
              learning new technologies to improve my skills. Currently, I focus
              on <span> Front-End development </span>, working with{" "}
              <span> React </span>and exploring frameworks like <span>Vue</span>{" "}
              Vue
            </p>
            <a href="#contact">
              {" "}
              Let's Connect <IoArrowForwardCircleOutline />{" "}
            </a>
          </div>
          <div className="my-image">
            <img src={headerimg}></img>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h1>My Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <img src={project3} alt="project3" />
            <h3>E-Commerce </h3>
            <p>
              A modern online store interface that allows users to browse
              products and view product details. The design focuses on
              responsive layout and a smooth user experience. This project
              demonstrates front-end skills such as component structure, UI
              design, and product presentation using <span>HTML CSS JS</span>
            </p>
            <a
              href=" https://moghandour273.github.io/E-commerce/"
              target="_blank"
              className="btn btn-dark"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <img src={project2} alt="project2" />
            <h3>Guess-Word-Game</h3>
            <p>
              An interactive word-guessing game where the user tries to discover
              the hidden word. The game provides feedback for correct and
              incorrect letters to guide the player. This project improves logic
              building, event handling, using <span>HTML CSS JS</span>
            </p>
            <a
              href=" https://moghandour273.github.io/GuessWordGame/ "
              target="_blank"
              className="btn btn-dark"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <img src={project1} alt="project1" />
            <h3>To-Do-List</h3>
            <p>
              A simple task management application that helps users organize
              their daily activities. Users can add, edit, and delete tasks
              easily through a clean interface. The project focuses on
              practicing state management and interactive UI development using{" "}
              <span>HTML CSS JS</span>
            </p>
            <a
              href=" https://moghandour273.github.io/To-Do-List/"
              target="_blank"
              className="btn btn-dark"
            >
              View Project
            </a>
          </div>
          <div className="project-card">
            <img src={project4} alt="project4" />
            <h3>CRM-System</h3>
            <p>
              A Customer Relationship Management system designed to help
              businesses manage customer information. It allows tracking
              customer data, interactions, and basic business activities. This
              project highlights structured UI design and building scalable web
              interfaces using <span>HTML CSS JS Django</span>
            </p>
            <a
              href="http://g77andour.pythonanywhere.com/"
              target="_blank"
              className="btn btn-dark"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="git-btn">
          <a href="https://github.com/MoGhandour273?tab=repositories">
            View More <IoArrowForwardCircleOutline />
          </a>
        </div>

      </section>

      <section id="skills" className="skills">
        <h1 className="text-center">Skills</h1>
        <div className=" container text-center">
          <div className="row row-cols-3 bg-dark p-5 mt-5 skill-div">
              {
                skills.map((skill,index) => (
                  <div key={index} className="col col-sm-4 col-md-3 col-lg-2 mb-4 d-flex flex-column align-item-center">
                    <img src={skill.img} alt={skill.name} className="img-fluid mb-2 skill-img"/>
                    <h5 className="text-center">{skill.name}</h5>

                  </div>
                ))
              }
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <h1> Contact</h1>
        <div className="container contact-div">
          <div className="contact-img ">
            <img src={contact} alt="contact"/>
          </div>
          <div className="form text-start">
            <form>
              <label className="text-start">Your Name</label>
              <input type="text" placeholder="Your Name"/>
              <label className="text-start" >Your Email</label>
              <input type="email" placeholder="Your Email"/>
              <label className="text-start" >Your Massege</label>
              <textarea name="massege" placeholder="Your Massege" />
            </form>
            <button type="submit" className="btn btn-dark m-3 mt-0">Submit</button>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer-div">
          <p> Copyright &copy; <span>Mohamed Elghandour</span> </p>
          <div className="icon-footer">
            <a href="https://www.instagram.com/mo_g7andour?igsh=MWVlZGcxcHp4c2Vycg%3D%3D"><SlSocialInstagram /></a>
            <a href="https://github.com/MoGhandour273"><FaGithub /></a>
            <a href="#"><TiSocialFacebook /></a>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;
