import styled from 'styled-components'
import { mint, brown } from "../Utils/colors";
import { FaOpencart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { FaShoppingCart } from 'react-icons/fa'
import { size } from "../Utils/breakpoints";
import { useCategoriesList } from "../hooks/products";
import { AiFillCloseSquare } from 'react-icons/ai';
import { RiLoginBoxFill, RiLogoutBoxFill } from 'react-icons/ri'
import { useState, useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { CartContext } from "../Contexts/CartContext";
import {BsFillCartFill, BsCart} from 'react-icons/bs'


const Navbar = () => {
  const {cartItems} = useContext(CartContext)
  const {logout, isLoggedIn} = useContext(UserContext)
  const [show, setShow] = useState(false)
  const { data, isLoading, error } = useCategoriesList();
  const categoriesItems = data || [];
  return (
    <>
      {!show && <MobileNavBtn onClick={()=>setShow(true)} />}
      {show && <MobileNav>
        
        <MobileLeft>
        
          <Slink to={'/'}><Logo /></Slink>
          <LoginBtn><span>Login</span><RiLoginBoxFill /></LoginBtn>
          <Slink to={'/cart'}><Cart /></Slink>
          <Search />
        </MobileLeft>
        <CategoriesMobile>
          {categoriesItems.length > 0 && categoriesItems.map((item) => (
            <Slink to={`/category/${item}`} key={item}><li>{item}</li></Slink>
          ))}
        </CategoriesMobile>
        <CloseBtn onClick={()=>setShow(false)}/>
      </MobileNav>}

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
          {!isLoggedIn ? <Slink to={'/login'}><LoginBtn onClick={() => logout()}><RiLoginBoxFill /><span>Login</span></LoginBtn></Slink> : <Slink to={'/'}><LoginBtn onClick={() => logout()}><RiLogoutBoxFill /><span>Logout</span></LoginBtn></Slink>}
          <Slink to={'/cart'}>
            {cartItems.length>0 ? <CartFilled/> : <Cart/>}
           </Slink>
        </Right>
      </NavContainer>
      </>
  );
}

export default Navbar;

const MobileNavBtn = styled(GiHamburgerMenu)`
  display: none;
  color: ${brown};
  position: fixed;
  font-size: 2rem;
  padding: 10px;
  top: 0;
  @media (max-width: ${size.mobile}) {
  display: block;
  }
`


const CategoriesMobile = styled.ul`
  list-style: none;
  margin: 10px 0;
  li {
    font-size: 0.8rem;
    margin-left: -30px;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 0 35px;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  color: ${brown};
  border-bottom: 1px solid ${brown};
  background-color: #ffffff;
  @media (min-width: 581px) {
  display: none;
  }
`

const LoginBtn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 20px;
color: inherit;
color: ${brown};
svg {
  font-size: 1.1rem;
}
span {
  font-size: 0.55rem;
}
`

const MobileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 60px;
`

const CloseBtn = styled(AiFillCloseSquare)`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.4rem;
  cursor: pointer;
`

const Cart = styled(BsCart)`
  font-size: 1.5rem;
  color: ${brown};
  padding: 5px;
  margin-left: 20px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    color: ${mint}
  }
`

const CartFilled = styled(BsFillCartFill)`
  font-size: 1.5rem;
  color: ${brown};
  padding: 5px;
  margin-left: 20px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    color: ${mint}
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${size.mobile}) {
  flex-direction: column;
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${brown};
  align-items: stretch;
  background-color: #ffffff;
  @media (max-width: ${size.mobile}) {
  display: none;
  }
`

const Logo = styled(FaOpencart)`
  padding: 8px 10px;
  margin-right: 10px;
  cursor: pointer;
  color: ${brown};
  font-size: 2.2rem;
  &:hover {
      color: ${mint}
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
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`

