import styled from "styled-components";
import { brown, grey, mint } from "../Utils/colors";

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
  justify-content: space-evenly;
  align-items: center;
  h4 {
    font-size: 0.9rem;
    margin: 0 5px;
    text-transform: capitalize;
 }
 p {
  font-weight: 700;
  color: ${brown};
 }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: rgba(240, 240, 240, 0.7);
  position: relative;
  border-radius: 10px;
  transition: 300ms ease;
  cursor: pointer;
  
 img{
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
 }
 span {
  position: absolute;
  font-size: 1rem;
  top: 0%;
  right: 0%;
  padding: 15px 10px;
  color: #8f0f04;
  background-color: #e5b1a881;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 10px;
  font-weight: 700;
  transition: inherit;
 }

 &:hover {
  background-color: ${mint};

  span {
    background-color: #e5b1a8e2;
  }
  h4 {
    color: ${brown};
  }
 }
`