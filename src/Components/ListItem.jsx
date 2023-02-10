import styled from "styled-components";
import { brown } from "../Utils/colors";
import { size } from "../Utils/breakpoints";


const ListItem = ({title, price, discount, pic}) => {
  return (
    <CardContainer>
      <img src={pic} alt={title} />
      <Details>
      <h4>{title}</h4>
        <p>${price}</p>
        </Details>
      <span>-{discount}%</span>
    </CardContainer>
  );
}

export default ListItem;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  h4 {
    width: 100%;
    font-size: 1rem;
    margin: 0 15px;
    margin-top: 10px;
    text-transform: capitalize;
    text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  text-align: center;

 }
 p {
  font-weight: 700;
  font-size: 1.2rem;
  color: ${brown};
  margin-bottom: 20px;
 }

 @media (max-width: ${size.mobile}) {
    max-width: 180px;

    h4 {
      font-size: 0.5rem;

    }

    p {
      font-size: 0.7rem;
      margin-bottom: 10px;
    }
  }
`

const CardContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: #ffffff;
  position: relative;
  border-radius: 5px;
  transition: 300ms ease;
  cursor: pointer;
  
 img{
  width: 280px;
  height: 280px;
  margin: 10px;
  object-fit: cover;
  border-radius: 5px;
 }
 span {
  position: absolute;
  font-size: 1rem;
  top: 10px;
  right: 10px;
  padding: 15px 10px;
  color: #8f0f04;
  background-color: #e5b1a881;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: 700;
  transition: inherit;
 }

 @media (max-width: ${size.laptop}) {
    max-width: 250px;

    span {
      font-size: 0.7rem;
      padding: 10px 5px;
    }
    
    img{
      width: 230px;
      height: 230px;
    }
    @media (max-width: ${size.mobile}) {
    width: 160px;
    
    img {
      width: 140px;
      height: 140px;
    }
  }
  }

 &:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  span {
    background-color: #e5b1a8e2;
  }
  h4 {
    color: ${brown};
  }
 }
`