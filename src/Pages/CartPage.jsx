import styled from "styled-components";
import { size } from "../Utils/breakpoints";
import { bgColor, brown } from "../Utils/colors";
import { CartContext } from "../Contexts/CartContext";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
      <CartContainer>
        {cartItems.map((product) => (
          <Slink key={product.id} to={`/category/${product.category}/${product.id}`}>
          <CartItem>
          <img src={product.images[0]} alt={product.title} />
          <div>
               <ItemName>{product.title}</ItemName>
              <ItemPrice>${product.price}</ItemPrice>
          </div>
            <ItemQuantity>pcs : { product.quantity}</ItemQuantity>
        </CartItem>
          </Slink>
        ))}
        
      </CartContainer>
      <ButtonContainer>
        <StyledButton type='button' onClick={handleClick}>CheckOut</StyledButton>

      </ButtonContainer>
    </Container>
  );
}

export default CartPage;

const Container = styled.div`
  height: 100%;
  margin-bottom: 100px;
  max-width: ${size.tablet};
  margin: 30px auto;
  color: ${brown};
`

const Title = styled.h2`
  margin: 50px;
  font-size: 1.5rem;
`

const CartContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const CartItem = styled.div`
  background-color: ${bgColor};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  img {
    width: 120px;
    height: 120px;
    margin-right: 20px;
    object-fit: contain;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
`

const ItemPrice = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
`

const ItemName = styled.p`
  font-weight: 300;
  margin-top: 8px;
  text-transform: capitalize;
`

const ItemQuantity = styled.div`
  flex: 1;
  align-self: center;
  margin-right: 32px;
  text-align: right;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 35px;
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
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