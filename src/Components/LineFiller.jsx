import Pic from '../Utils/pictures/filler.png';
import styled from 'styled-components';
import { FaPercent } from 'react-icons/fa';
import { brown } from '../Utils/colors';
import { size } from '../Utils/breakpoints';
import { UserContext } from '../Contexts/UserContext';
import { useContext } from 'react';

const LineFiller = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  return (
    <Container>
      <div>
        {isLoggedIn && <h3>Welcome {user.first_name} {user.last_name}</h3>}
        <h1>LIMITED FLASH SALE</h1>
        <FaPercent/>
      </div>
      <img src={Pic} alt="" />
    </Container>
  )
}

export default LineFiller

const Container = styled.div`
  color: ${brown};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 20px auto;
  width: 90%;
  img {
    width: 50%;
  }
  div {
   display: flex;
   flex-direction: column;
   align-items: center;
   svg {
    font-size: 3rem;
   }
   @media (max-width: ${size.tablet}) {
 
 h1{
   font-size: 1.1rem;
 }
 svg {
   font-size: 1.5rem;
 }
}
  }
`