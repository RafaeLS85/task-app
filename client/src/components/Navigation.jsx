import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoChecklist } from "react-icons/go";
import { useEffect, useState } from "react";
import "./Navigation.css";

const StyledLi = styled.li`
  cursor: pointer;
`;

export const Navigation = () => {
  const [nav, setNav] = useState();
  const [toggleIcon, setToggleIcon] = useState();
  const [toggle, setToggle] = useState(true);

  const Menu = () => {
    return (
      <ul id="menu">
        {/* <StyledLi>
          <Link to="/tasks">Home</Link>
        </StyledLi> */}
        <StyledLi>
          <Link to="/tasks-create">+ New Task</Link>
        </StyledLi>
        {/* <StyledLi>
          <a href="#about">About</a>
        </StyledLi>
        <StyledLi>
          <a href="#contact">Contact</a>
        </StyledLi> */}
      </ul>
    );
  };

  useEffect(() => {
    setNav(document.querySelector(".overlay-menu"));
    setToggleIcon(document.querySelector(".menuIcon"));
  }, [toggleIcon, nav, toggle]);

  function handleClick() {
    if (nav.style.transform != "translateX(0%)") {
      nav.style.transform = "translateX(0%)";
      nav.style.transition = "transform 0.2s ease-out";
    } else {
      nav.style.transform = "translateX(-100%)";
      nav.style.transition = "transform 0.2s ease-out";
    }
    if (toggleIcon.className != "menuIcon toggle") {
      setToggle(false);
      toggleIcon.className += " toggle";
    } else {
      setToggle(true);
      toggleIcon.className = "menuIcon";
    }
  }

  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            {/* <StyledLi> */}
              <GoChecklist size={35} style={{ verticalAlign: "middle" }} />
              <Link to="/tasks">Tasks APP</Link> 
            {/* </StyledLi> */}
          </div>
          {toggle && <Menu />}
        </div>
      </nav>

      <div className="menuIcon" onClick={(e) => handleClick(e)}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <Menu />
      </div>
    </>
  );
};
