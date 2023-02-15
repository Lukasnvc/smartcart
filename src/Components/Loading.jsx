import { FiLoader } from 'react-icons/fi';
import styled from 'styled-components';


const Loading = () => {
  return (
    <Loader/>
  );
}

export default Loading;

const Loader = styled(FiLoader)`
  width: 100%;
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
