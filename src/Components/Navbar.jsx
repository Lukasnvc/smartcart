import axios from "axios";
import { useState, useEffect } from "react";
import { categories } from '../Api/categories';
import styled from 'styled-components'
import { grey, mint, brown } from "../Utils/colors";
import { FaOpencart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [categoriesItems, setCategoriesitems] = useState([])
  useEffect(() => {
    axios
      .get(categories)
      .then((response) => setCategoriesitems(response.data))
      .catch((error) => {
      console.log('Categories :' , error)
      })
  },[])
  return (
    <NavContainer>
      <NavTab>
        <Slink to={'/'}><FaOpencart/></Slink>
      </NavTab>
      <DropDown>
        <h3><GiHamburgerMenu/>Categories</h3>
        <ul>
      {categoriesItems.length>0 && categoriesItems.map((item) => (
        <Slink to={`/category/${item}`} key={item}><li>{item}</li></Slink>
      ))}
          </ul>
      </DropDown>
      <Search/>
      </NavContainer>
  );
}

export default Navbar;


const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid ${brown};
  align-items: stretch;
  background-color: #ffffff;
`

const NavTab = styled.div`
  padding: 8px 10px;
  cursor: pointer;
  color: ${brown};
  svg {
    font-size: 2.2rem;
    margin: 0 20px;
  }
  &:hover {
    svg {
      color: ${mint}
    }
  }
`

const DropDown = styled.div`
  position: relative;
  padding: 8px 10px;
  cursor: pointer;
  color: ${brown};
  display: flex;
  align-items: center;
  h3{
    display: flex;
    align-items: center;
    padding: 0;
    margin: 3px 0;

    svg {
      margin-right: 10px;
    }
  }
  &:hover {
    background-color: rgba(240, 240, 240, 0.8);
  }

  ul {
  position: absolute;
  background-color: rgba(240, 240, 240, 0.9);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  top: 30px;
  padding-bottom: 10px;
  left: 0px;
  display: none;
  z-index: 99;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  li {
    padding: 0px 10px;
    margin-left: -30px;
    font-size: 0.9rem;
    font-weight: 500;
    list-style: none;
    margin-bottom: 7px;
    text-transform: capitalize;
    &:hover {
      color: black;
    }
  }
  }
  &:hover {
    ul {
      display: block;
    }
  }
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`

