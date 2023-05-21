// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { GrFormAdd } from 'react-icons/gr'
import {SiTask} from 'react-icons/si';
import { useEffect } from "react";
import "./Navigation.css";

// const StyledNavBar = styled.nav`
//   display: flex;
//   gap: 2rem;
//   background-color: #f3f6f4;
//   padding: 1rem ;
//   cursor: pointer;
//   color:  black;
//   font-size: 2rem ;
//   font-weight: bold ;
//   justify-content: center ;
//   align-items: center ;
// `;

// const Button = styled.div`
//     background-color: #2986cc ;
//     color: white;
//     border-radius: 5px ;
//     padding: 0.5rem ;
// `

export const Navigation = () => {
  useEffect(() => {
    setTimeout(() => {
      let menuIcon = document.querySelector(".menuIcon");
      let nav = document.querySelector(".overlay-menu");

      menuIcon.addEventListener("click", () => {
        if (nav.style.transform != "translateX(0%)") {
          nav.style.transform = "translateX(0%)";
          nav.style.transition = "transform 0.2s ease-out";
        } else {
          nav.style.transform = "translateX(-100%)";
          nav.style.transition = "transform 0.2s ease-out";
        }
      });

      // Toggle Menu Icon ========================================
      let toggleIcon = document.querySelector(".menuIcon");

      toggleIcon.addEventListener("click", () => {
        if (toggleIcon.className != "menuIcon toggle") {
          toggleIcon.className += " toggle";
        } else {
          toggleIcon.className = "menuIcon";
        }
      });
    }, 1000);
  }, []);

  return (
    // <StyledNavBar>
    //   <Link to="/tasks">Tasks App</Link>
    //   <Button>
    //     <Link to="/tasks-create"><GrFormAdd size={35} style={{ verticalAlign: 'bottom'}} classNameName="icon" /></Link>
    //   </Button>
    // </StyledNavBar>
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
              <SiTask />
               Tasks
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
