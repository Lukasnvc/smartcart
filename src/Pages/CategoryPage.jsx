import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { byCategory } from '../Api/byCategory';
import ListItem from "../Components/ListItem";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { size } from "../Utils/breakpoints";

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
