import React from 'react'
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import profile from "../assets/showcase.jpg"

const NavbarWrapper = styled.nav`
    background-color: white;
    padding: 0 2rem;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.2);

    .nav-links {
        a {
            font-size: 14px;
            color: #333;
            text-decoration: none;
            display: inline-block;
            padding: 1.2rem .75rem;
            margin: 0 5px;
            border: none;
        }
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            max-width: 40px;
            height: 40px;
            border-radius: 5px;
        }
    }

    @media screen and  (max-width: 600px) {
        padding: 10px 2rem;
        .nav-links {
            display: none;
        }
    }
`;


const Navbar = () => {
    const navLink = ({ isActive }) => {
        return {
            borderBottom: isActive  ? '2px solid royalblue' : 'none',
            color: isActive ? 'royalblue' : 'inherit'
        }
    }
  return (
    <NavbarWrapper>
          <h1 className='logo'>Tweeter</h1>
          <div className="nav-links">
              <NavLink style={navLink} to="/feeds">Home</NavLink>
              <NavLink style={navLink} to="/explore">Explore</NavLink>
              <NavLink style={navLink} to="/bookmarks">Bookmarks</NavLink>
          </div>
          <div className="profile">
              <img src={profile} alt="photo" />
              <p>Mas'ud Nda</p>
          </div>
    </NavbarWrapper>
  )
}

export default Navbar
