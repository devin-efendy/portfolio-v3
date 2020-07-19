import React from "react"
import styled from "styled-components"
import TablerIcon from "../utils/TablerIcon"
import Device from "../utils/Device"

const MenuIcon = styled.button`
  position: fixed;
  top: 3rem;
  left: 2rem;

  width: 60px;
  height: 60px;

  background: none;
  background-image: ${({ nav }) =>
    nav
      ? "none"
      : "linear-gradient(to bottom left, #feac5e, #c779d0, #4bc0c8)"};

  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  box-shadow: ${({ nav }) =>
    nav ? "2px 2px 3px rgb(0,0,0,0)" : "2px 2px 3px #999"};

  transition: background-image 500ms, box-shadow 700ms, transform 500ms;

  div {
    margin: 9px 0;

    width: 100%;
    height: 7px;
    background: ${({ nav }) => (nav ? "black" : "white")};
    border-radius: 5px;

    transform-origin: 1px;
    -webkit-transform-origin: 1px;

    position: relative;

    transition: transform 200ms, background 300ms, opacity 200ms,
      width 200ms ease-out;
    -webkit-transition: transform 200ms, background 300ms, opacity 200ms;

    :nth-child(1) {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0deg)")};
      -webkit-transform: ${({ nav }) =>
        nav ? "rotate(45deg)" : "rotate(0deg)"};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      width: ${({ nav }) => (nav ? "100%" : "60%")};
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0deg)")};
      -webkit-transform: ${({ nav }) =>
        nav ? "rotate(-45deg)" : "rotate(0deg)"};

      transition: transform 200ms, width 200ms ease-out;
    }

    z-index: 6;
  }

  :hover {
    div {
      :nth-child(3) {
        width: 100%;
      }

      z-index: 6;
    }
  }

  @media ${Device.max.MobileL} {
    width: 50px;
    height: 50px;

    transform-origin: 0px;

    left: 1rem;

    div {
      margin: 7px 0;
      height: 6px;
    }
  }

  @media (max-width: 1366px) and (max-height: 768px) {
    width: 50px;
    height: 50px;

    transform-origin: 0px;

    left: 1rem;
    top: 2rem;

    div {
      margin: 7px 0;
      height: 6px;
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  height: 100vh;
  width: 300px;
  background: white;

  border-radius: 0 25px 25px 0;

  /* box-shadow: h-offset v-offset blur spread color |inset|initial|inherit; */
  /* box-shadow: 2px 0 10px 0px #cdcdcd; */

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 200ms ease-in-out;

  ul {
    list-style: none;
    margin: 0;

    display: flex;
    flex-direction: column;

    position: fixed;
  }

  li {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

  span {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 0.8rem;

    background: none !important;
    text-shadow: none !important;
    background-image: none !important;

    :hover {
      background-image: none !important;
      text-decoration: underline;
      text-decoration-color: #4bc0c8;
    }
  }

  @media ${Device.max.MobileL} {
    width: 200px;

    ul {
      left: 2rem;
    }

    li {
      margin: 1rem 0;
    }

    a {
      font-size: 1.1rem;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 1366px) and (max-height: 768px) {
    width: 250px;

    ul {
      left: 2rem;
    }

    li {
      margin: 1rem 0;
    }

    a {
      font-size: 1.1rem;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`

const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  /* opacity: 0.3; */
  z-index: 9;

  animation: fadeIn 300ms forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.3;
    }
  }
`

const MenuNavigation = ({ nav, showNav }) => {
  const toogleNav = () => {
    showNav(!nav)
  }

  return (
    <div>
      <MenuIcon onClick={toogleNav} nav={nav}>
        <div />
        <div />
        <div />
      </MenuIcon>

      {nav && <NavOverlay nav={nav} onClick={toogleNav} nav={nav} />}

      <MenuLinks nav={nav}>
        <ul>
          <li>
            <span>{TablerIcon.HomeIcon}</span>
            <a href="#" onClick={toogleNav}>
              Home
            </a>
          </li>
          <li>
            <span>{TablerIcon.UserIcon}</span>
            <a href="#" onClick={toogleNav}>
              About
            </a>
          </li>
          <li>
            <span>{TablerIcon.ToolsIcon}</span>
            <a href="#" onClick={toogleNav}>
              Skill
            </a>
          </li>
          <li>
            <span>{TablerIcon.BracesIcon}</span>
            <a href="#" onClick={toogleNav}>
              Projects
            </a>
          </li>
          <li>
            <span>{TablerIcon.LaptopIcon}</span>
            <a href="#" onClick={() => showNav(!nav)}>
              Experience
            </a>
          </li>
        </ul>
      </MenuLinks>
    </div>
  )
}

export default MenuNavigation
