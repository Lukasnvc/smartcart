import { useParams } from "react-router-dom";
import ListItem from "../Components/ListItem";
import styled from "styled-components";
import { size } from "../Utils/breakpoints";
import { useProductsByCategory } from "../hooks/products";
import Loading from "../Components/Loading";

const CategoryPage = () => {
  let params = useParams()
  const { data, isLoading, error } = useProductsByCategory(params.name);
  const list = data || [];

  if (isLoading) {
    return <Loading/>
  }
  if (error) {
    return <h1>Cant get data...</h1>
  }

  return (
    <Container>
    {list.map((item) => (
        <ListItem key={item.id} product={item} />
   ))}
    </Container>
  );
}

export default CategoryPage;


const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 40px auto;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: ${size.tablet}) {
   grid-template-columns: 1fr 1fr;
   gap: 10px;
   width: 95%;
  }
`

