
import ListItem from '../Components/ListItem';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size } from '../Utils/breakpoints';
import LineFiller from '../Components/LineFiller';
import { useAllProducts } from '../hooks/products';


const HomePage = () => {
  const { data, isLoading, error } = useAllProducts();
  const list = data || []

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Cant get data...</h1>
  }
  return (
    <>
      <LineFiller/>
    <Container>
      {list.map((item) => (
        <Slink to={`/category/${item.category}/${item.id}`} key={item.id + item.title}>
          <ListItem key={item.id} title={item.title} pic={item.thumbnail} price={item.price} discount={item.discountPercentage} category={item.category } />
        </Slink>
     ))}
      </Container>
      </>
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