import styled from "styled-components";
import { size } from "../Utils/breakpoints";
import { bgColor, brown } from "../Utils/colors";
import { CartContext } from "../Contexts/CartContext";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "../Components/CartItems";

const CartPage = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);

  const handleClick = () => {
    isLoggedIn ? navigate('/checkout') : navigate('/login')
    
  }
  return (
    <Container>
      <Title>Cart</Title>
      {cartItems.length>0 ? <CartItems cartItems={cartItems}/> : <TitleEmptyCart>Cart is empty</TitleEmptyCart> }
      
      <ButtonContainer>
        {cartItems.length > 0 && <StyledButton type='button' onClick={handleClick}>CheckOut</StyledButton>}
      </ButtonContainer>
    </Container>
  );
}

export default CartPage;

const TitleEmptyCart = styled.h3`
  text-align: center;
  margin: 100px auto;
`

const Container = styled.div`
  height: 100%;
  padding-bottom: 80px;
  max-width: ${size.tablet};
  margin: 30px auto;
  color: ${brown};
`

const Title = styled.h2`
  margin: 50px;
  font-size: 1.5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 35px;
`

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background-color: ${brown};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: 300ms ease;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: ${bgColor};
  }
`