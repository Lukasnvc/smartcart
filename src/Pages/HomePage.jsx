import axios from 'axios'
import { allProducts } from '../Api/allProducts';
import { useState, useEffect } from 'react';
import ListItem from '../Components/ListItem';
import styled from 'styled-components';

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
        <ListItem key={item.id} title={item.title} pic={item.thumbnail} price={item.price} discount={item.discountPercentage}/>
     ))}
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`
