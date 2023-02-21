import styled from "styled-components";
import { FaOpencart } from 'react-icons/fa';
import { RiLoginBoxFill, RiLogoutBoxFill } from 'react-icons/ri';
import { size } from "../Utils/breakpoints";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillCartFill, BsCart } from 'react-icons/bs';
import Search from "./Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { brown, mint } from "../Utils/colors";
import { AiFillCloseSquare } from "react-icons/ai";


const MobileNav = ({cartItems, logout, isLoggedIn, data}) => {
  const [show, setShow] = useState(false);
  return (
    <>
    {!show && <MobileNavBtn onClick={()=>setShow(true)} />}

{show && <Container>
  <LeftSide>
  <Slink onClick={() => setShow(false)} to={'/'}><Logo/></Slink>
  <Login> 
            {!isLoggedIn ? <Slink onClick={() => setShow(false)} to={'/login'}><LoginBtn onClick={() => logout()}><RiLoginBoxFill /><span>Login</span></LoginBtn></Slink> :
              <Slink to={'/'} onClick={() => setShow(false)}><LoginBtn onClick={() => logout()}><RiLogoutBoxFill /><span>Logout</span></LoginBtn></Slink>}
  </Login>

  <Cart><Slink onClick={() => setShow(false)} to={'/cart'}>{cartItems.length>0 ? <BsFillCartFill/> : <BsCart/>}</Slink></Cart>

  <Search/>
  </LeftSide>

  <RightSide>
    {data.map((item) => (
     <Slink to={`/category/${item}`} key={item} onClick={() => setShow(false)}><p>{item}</p></Slink>
    ))}
  </RightSide>

  <CloseBtn onClick={()=> setShow(false)}/>
</Container>
}
</>
  );
}

export default MobileNav;

const MobileNavBtn = styled(GiHamburgerMenu)`
  display: none;
  color: ${brown};
  position: fixed;
  font-size: 2rem;
  padding: 10px;
  top: 0;
  cursor: pointer;
  @media (max-width: ${size.mobile}) {
  display: block;
  }
  &:hover {
    color: ${mint}
  }
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 99;
  justify-content: space-evenly;
  color: ${brown};
  background-color: #ffffff;
  border-bottom: 1px solid ${brown};
  padding-bottom: 10px;
  @media (min-width: 581px) {
   display: none;
  }
`

const CloseBtn = styled(AiFillCloseSquare)`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    color: ${mint}
  }
`

const Cart = styled.div`
  font-size: 2rem;
  &:hover {
    color: ${mint}
  }
`

const Login = styled.div`
  
`

const LoginBtn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
&:hover {
    color: ${mint}
  }
  span {
    font-size: 0.6rem;
  }
  svg{
    font-size: 2rem;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Logo = styled(FaOpencart)`
  font-size: 3rem;
  &:hover {
    color: ${mint}
  }
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5px;
  p{
    text-transform: capitalize;
    font-size: 0.7rem;
    margin: 0;
    margin-bottom: 5px;
    &:hover {
    color: ${mint};
    transform: scale(1.1);
  }
  }
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

