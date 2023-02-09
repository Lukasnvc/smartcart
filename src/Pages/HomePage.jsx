import axios from 'axios'
import { allProducts } from '../Api/allProducts';
import { useState, useEffect } from 'react';
import ListItem from '../Components/ListItem';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`