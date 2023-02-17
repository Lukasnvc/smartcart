import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { bgColor } from "../Utils/colors";

const CartItems = ({cartItems}) => {
  return (
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
  );
}

export default CartItems;


const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
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
  font-size: 1.3rem;
  font-weight: 600;
  width: fit-content;
`

const ItemName = styled.p`
  font-weight: 300;
  margin-top: 8px;
  text-transform: capitalize;
  width: fit-content;
`

const ItemQuantity = styled.p`
  flex: 1;
  align-self: center;
  margin-right: 32px;
  text-align: right;
  
`
