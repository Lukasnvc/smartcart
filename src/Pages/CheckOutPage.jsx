import styled from "styled-components";
import CartItems from "../Components/CartItems";
import { useContext, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext";
import { size } from "../Utils/breakpoints";
import { brown } from "../Utils/colors";
import FormikPaymentForm from "../Components/FormikPaymentForm";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)
  useEffect(() => {
    if (!cartItems.length) {
      navigate('/cart')
    }
  },[cartItems, navigate])
  return (
    <Container>
      <PaymentContainer>
        <FormikPaymentForm/>
      </PaymentContainer>
      <CartSide>
        <CartItems cartItems={cartItems} />
        </CartSide>
    </Container>
  );
}

export default CheckOutPage;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding-bottom: 80px;
  max-width: ${size.tablet};
  margin: 30px auto;
  color: ${brown};
  gap: 20px;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    max-width: ${size.mobile};
  }
`

const PaymentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  flex: 5;
  background-color: #ffffff;
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const CartSide = styled.div`
  margin-top: 20px;
  flex: 4;
`