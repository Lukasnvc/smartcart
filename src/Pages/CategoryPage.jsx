import { useParams } from "react-router-dom";
import ListItem from "../Components/ListItem";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { size } from "../Utils/breakpoints";
import { useProductsByCategory } from "../hooks/products";
import { FiLoader } from 'react-icons/fi';

const CategoryPage = () => {
  let params = useParams()
  const { data, isLoading, error } = useProductsByCategory(params.name);
  const list = data || [];

  if (isLoading) {
    return <Loader/>
  }
  if (error) {
    return <h1>Cant get data...</h1>
  }

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

const Loader = styled(FiLoader)`
  width: 100vw;
  margin: 30% auto;
  font-size: 5rem;
  animation: rotation 2s infinite linear;
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`

const Container = styled.div`
  width: 90%;
  height: 95vh;
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
