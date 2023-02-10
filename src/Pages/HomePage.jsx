import axios from 'axios'
import { allProducts } from '../Api/allProducts';
import { useState, useEffect } from 'react';
import ListItem from '../Components/ListItem';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size } from '../Utils/breakpoints';


const HomePage = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios 
    .get(allProducts)
    .then((response) => setList(response.data.products))
      .catch((error) => console.log('home :', error))
  },[])

  return (
    <Container>

      {list.map((item) => (
        <Slink to={`/category/${item.category}/${item.id}`} key={item.id + item.title}>
         <ListItem key={item.id} title={item.title} pic={item.thumbnail} price={item.price} discount={item.discountPercentage}/>
        </Slink>
     ))}
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 90%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: ${size.tablet}) {
   grid-template-columns: 1fr 1fr;
   gap: 10px;
   width: 95%;
  }
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`