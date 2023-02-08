import axios from "axios";
import { useState, useEffect } from "react";
import { categories } from '../Api/categories';
import styled from 'styled-components'
import { grey, mint, brown } from "../Utils/colors";
import {FaOpencart} from 'react-icons/fa'

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
        <FaOpencart/>
      </NavTab>
      <DropDown>
        <h3>Categories</h3>
        <ul>
      {categoriesItems.length>0 && categoriesItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
          </ul>
          </DropDown>
      </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${brown};
  align-items: stretch;
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
    padding: 0;
    margin: 3px 0;
  }
  &:hover {
    background-color: rgba(240, 240, 240, 0.8);
  }

  ul {
  position: absolute;
  background-color: rgba(240, 240, 240, 0.9);
  top: 25px;
  left: 0px;
  padding: 10px;
  display: none;
  z-index: 99;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  li {
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

