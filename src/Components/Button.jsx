import styled from "styled-components";
import { bgColor, brown } from "../Utils/colors";

const Button = ({children, ...rest}) => {
  return (
    <MainButton {...rest}>
      {children}
    </MainButton>
  );
}

export default Button;

const MainButton =styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${brown};
  padding: 13px 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: ${bgColor};
  }
  &:disabled{
    cursor: not-allowed;
    opacity: 0.8;
  }
`