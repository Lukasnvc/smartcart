import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSingleProduct } from '../Api/getSingleProduct';
import styled from "styled-components";
import { bgColor, brown, grey, lightGreen, mint } from '../Utils/colors';
import { FaCartPlus } from 'react-icons/fa'
import {size} from '../Utils/breakpoints'


const Product = () => {
  let params = useParams()
  const [product, setProduct] = useState({})
  const [pic, setPic ] = useState('')
  useEffect(() => {
    axios
      .get(getSingleProduct + params.id)
      .then((response) => {
        setProduct(response.data)
        setPic(response.data.images[0])
      })
      .catch((error) => {
        console.log('Single product :', error);
    })
  }, [params.id])

  console.log(product)
  console.log(pic)
  return (
    <Container>
      <h2>{product.title}</h2>
      <ProductContainer>
      <ImgContainer>
        <ThumbNails>
        {product.images && product.images.map((item) => (
          <img onClick={()=> setPic(item)} key={item} src={item} alt={product.title + pic} />
        ))}
        </ThumbNails>
        {pic && <img src={pic} alt="" />}
        </ImgContainer>
        <DetailContainer>
        <h4>Rating: {product.rating}</h4>
        <span>${product.price}</span>
        <button><FaCartPlus/>Add to Cart</button>
      </DetailContainer>
      </ProductContainer>
      <Bottom>
      <h5>Products description</h5>
        <p>{product.description}</p>
        </Bottom>
      </Container>
  );
}

export default Product;

const Container = styled.div`
  width: 90vw;
  height: 80vh;
  margin: 30px auto;
  text-transform: capitalize;
  h2 {
    margin: 20px 40px;
color: ${brown};
  }
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  img {
    max-height: 400px;
    max-width: 500px;
    object-fit: contain;
    border-radius: 3px;
    margin: 0 auto;
    @media (max-width: ${size.mobile}) {
    max-width: 350px;
  }
  }
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`

const ThumbNails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #ffffff;
padding: 0 10px;
margin: 20px 0;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: 1px solid ${brown};
    margin: 2px;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media (max-width: ${size.tablet}) {
    flex-direction: row;
    img {
      width: 40px;
    height: 40px;
    }
  }
`

const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${bgColor};
  border-radius: 5px;
  margin: 30px 30px;
  color: ${grey};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  span {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 600;
  }
  p{
    font-weight: 600;
    font-size: 0.8rem;
  }
  button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 1.3rem;
    background-color: ${grey};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    svg {
      margin-right: 7px;
    }
    &:hover {
      color: ${mint};
      box-shadow: rgba(99, 99, 99, 0.2) 2px 4px 16px 0px;
    }
  }
`

const Bottom = styled.div`
  margin-top: 40px;
  padding: 20px 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  h5 {
    margin: 0;
    padding: 5px;
    border-bottom: 2px solid ${bgColor};
  }
  p {
    text-indent: 20px;
    line-height: 1.5;
  }
`

