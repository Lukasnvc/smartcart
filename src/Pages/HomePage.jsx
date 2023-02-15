import ListItem from '../Components/ListItem';
import styled from 'styled-components';
import { size } from '../Utils/breakpoints';
import LineFiller from '../Components/LineFiller';
import { useAllProducts } from '../hooks/products';
import Loading from '../Components/Loading';


const HomePage = () => {
  const { data, isLoading, error } = useAllProducts();
  const list = data || []

  if (isLoading) {
    return <Loading/>
  }
  if (error) {
    return <h1>Cant get data...</h1>
  }
  return (
    <>
      <LineFiller/>
    <Container>
      {list.map((item) => (
          <ListItem key={item.id} product={item} />
     ))}
      </Container>
      </>
  );
}

export default HomePage;

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

