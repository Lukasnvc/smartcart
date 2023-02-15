import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Routers from '../routers/Routers';

const Layout = () => {
  return (
    <Wrapper>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer/>
      
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
`

