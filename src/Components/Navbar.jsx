import styled from 'styled-components'
import { mint, brown } from "../Utils/colors";
import { FaOpencart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { FaShoppingCart } from 'react-icons/fa'
import { size } from "../Utils/breakpoints";
import { useCategoriesList } from "../hooks/products";

const Navbar = () => {
  const { data, isLoading, error } = useCategoriesList();
  const categoriesItems = data || []
  
  return (
    <NavContainer>
      <DropDown>
        <h3><GiHamburgerMenu/>Categories</h3>
        <ul>
      {categoriesItems.length>0 && categoriesItems.map((item) => (
        <Slink to={`/category/${item}`} key={item}><li>{item}</li></Slink>
      ))}
          </ul>
      </DropDown>
        <Slink to={'/'}><Logo/></Slink>
      <Right>
      <Search />
        <Cart/>
        </Right>
      </NavContainer>
  );
}

export default Navbar;

const Right = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${size.mobile}) {
  flex-direction: column;
  }
`

const Cart = styled(FaShoppingCart)`
  font-size: 1.5rem;
  color: ${brown};
  padding: 5px;
  margin: 0 30px;
  cursor: pointer;
  &:hover {
    color: ${mint}
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${brown};
  align-items: stretch;
  background-color: #ffffff;
  @media (max-width: ${size.mobile}) {
  width: 100%;
  }
`

const Logo = styled(FaOpencart)`
  padding: 8px 10px;
  cursor: pointer;
  color: ${brown};
  font-size: 2.2rem;
  &:hover {
      color: ${mint}
    }
    @media (max-width: ${size.mobile}) {
 display: none;
  }
`

const DropDown = styled.div`
  position: relative;
  padding: 8px 10px;
  margin: 0 30px;
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

  @media (max-width: ${size.mobile}) {
  margin: 0 10px;
  }
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`

