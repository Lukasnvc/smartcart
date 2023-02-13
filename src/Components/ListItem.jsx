import styled from "styled-components";
import { brown, grey, lightGreen } from "../Utils/colors";
import { size } from "../Utils/breakpoints";
import {BsFillPlusCircleFill} from 'react-icons/bs'


const ListItem = ({ title, price, discount, pic, category }) => {
  const oldPrice = (price+price/discount).toFixed(2)
  return (
    <CardContainer>
      <ImgContainer>
        <img src={pic} alt={title} />
      </ImgContainer>
      <p>{category}</p>
      <h4>{title}</h4>
      <OldPrice>${oldPrice}</OldPrice>
      <Bottom>
        <span>${price}</span>
        <span><BsFillPlusCircleFill/></span>
       </Bottom>
    </CardContainer>
  );
}

export default ListItem;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 5px 0 10px 0;
  span {
    font-weight: 600;
    font-size: 1.2rem;
    margin-right: 10px;
  }
  svg {
    font-size: 1.3rem;
    cursor: pointer;
    margin-left: 10px;
    transition: 300ms ease;
    &:hover{
      color: ${lightGreen};
      scale: 1.2;
    }
  }
`

const CardContainer = styled.div`
  max-width: 300px;
  border-radius: 5px;
  color: ${brown};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 300ms ease;
  cursor: pointer;
  margin: 0 auto;

  h4 {
    text-align: center;
    margin: 5px 6px;
    font-size: 0.9rem;
    text-transform: capitalize;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
  &:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (max-width: ${size.laptop}) {
    max-width: 250px;

  @media (max-width: ${size.mobile}) {
    width: 160px;
    h4 {
      font-size: 0.5rem;
    }
  }
}
`

const OldPrice = styled.span`
  text-decoration: line-through;
  font-weight: 600;
  font-size: 0.9rem;
  color: #cc4141;
`

const ImgContainer = styled.div`
   img {
    width: 100%;
    height: 100%;
    object-position: cover;
    width: 280px;
    height: 280px;
    margin: 10px;
    object-fit: cover;
    border-radius: 5px;

    @media (max-width: ${size.laptop}) {
      width: 230px;
      height: 230px;
    
    @media (max-width: ${size.mobile}) {
      width: 140px;
      height: 140px;
      }
    }
  }
`