import styled from "styled-components";
import { brown } from "../Utils/colors";
import { size } from "../Utils/breakpoints";

const Footer = () => {
  return (
    <Container>
      <About>
        <h3>SmartCart</h3>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam laudantium, perferendis, aut, eos incidunt culpa ex aspernatur eius mollitia nulla! Consequatur corrupti dolores nulla explicabo voluptatibus corporis consectetur aliquid.</span>
      </About>
      <Links>
        <h3>Useful Links</h3>
        <p>Shop</p>
        <p>Cart</p>
        <p>Login</p>
        <p>Privacy policy</p>
      </Links>
      <Contacts>
        <h3>Contacts</h3>
        <span>Vilniaus g. 10, Kaunas, Lithuania</span>
        <span>+370 688 44 32132</span>
        <span>smartcart@gmail.com</span>
      </Contacts>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  background-color: #ffffff;
  padding: 10px;
  h3{
    font-size: 0.8rem;
  }
  p, span {
    color: ${brown};
    font-size: 0.6rem;
    margin: 3px 0;
  }
  p:hover {
    scale: 1.1;
    cursor: pointer;
  }

  @media (max-width: ${size.mobile}) {
    gap: 20px;
   p,span {
    font-size: 0.4rem;
   }
   h3 {
    font-size: 0.6rem;
   }
  }
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`
