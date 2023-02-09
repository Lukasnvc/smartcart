import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { byCategory } from '../Api/byCategory';
import ListItem from "../Components/ListItem";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const CategoryPage = () => {
  const [list, setList] = useState([])
  let params = useParams()
  useEffect(() => {
    axios
      .get(byCategory + params.name)
      .then((response) => setList(response.data.products))
      .catch((error) => {
      console.log('Category :', error)
    })
  }, [params.name])
  return (
    <Container>
         {list.map((item) => (
          <Slink key={item.id} to={`/category/${item.category}/${item.id}`} >
        <ListItem title={item.title} pic={item.thumbnail} price={item.price} discount={item.discountPercentage}/>
        </Slink>
     ))}
    </Container>
  );
}

export default CategoryPage;

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