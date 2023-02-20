import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { bgColor, brown } from "../Utils/colors";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartItems = ({ cartItems}) => {
const {updateQuantity} = useContext(CartContext)
  return (
    <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id}>
          <img src={product.images[0]} alt={product.title} />
          <div>
          <Slink to={`/category/${product.category}/${product.id}`}><ItemName>{product.title}</ItemName></Slink>
              <ItemPrice>${product.price}</ItemPrice>
          </div>
            <ItemQuantity>pcs : {product.quantity}</ItemQuantity>
              <AddItem onClick={()=> updateQuantity(product.id, 'increase')}/>
              <RemoveItem onClick={()=>updateQuantity(product.id, "")}/>
        </CartItem>
        ))}
      </CartContainer>
  );
}

export default CartItems;

const AddItem = styled(AiOutlinePlus)`
  color: ${brown};
  font-size: 1.3rem;
  position: absolute;
  right: 10px;
  top: 10px;
`

const RemoveItem = styled(AiOutlineMinus)`
  color: ${brown};
  font-size: 1.3rem;
  position: absolute;
  right: 10px;
  bottom: 10px;
`



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
  position: relative;
  background-color: ${bgColor};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  user-select: none;
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
