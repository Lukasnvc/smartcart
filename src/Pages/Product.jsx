import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSingleProduct } from '../Api/getSingleProduct';
import styled from "styled-components";


const Product = () => {
  let params = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios
      .get(getSingleProduct + params.id)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.log('Single product :', error);
    })
  }, [params.id])
  console.log(product.images)
  return (
    <Container>
      <h2>{product.title}</h2>
      <h4>Rating: {product.rating}</h4>
      <ImgContainer>
       
        {/* {product.images.map((pic) => (
          <img key={pic} src={pic} alt={product.title + pic} />
        ))} */}
        </ImgContainer>
    <ProductContainer>
      {product.title}
      <DetailContainer>
        <p>${product.price}</p>
        <button>Add to Cart</button>
        <p>{product.description
 }</p>
      </DetailContainer>
      </ProductContainer>
      </Container>
  );
}

export default Product;

const Container = styled.div`
  width: 90vw;
  margin: 40px auto;
  text-transform: capitalize;
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImgContainer = styled.div`
  
`

const DetailContainer = styled.div`
  
`
