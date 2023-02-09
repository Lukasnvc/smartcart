import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { byCategory } from '../Api/byCategory';
import ListItem from "../Components/ListItem";
import styled from "styled-components";

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
        <ListItem key={item.id} title={item.title} pic={item.thumbnail} price={item.price} discount={item.discountPercentage}/>
     ))}
    </Container>
  );
}

export default CategoryPage;

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`
