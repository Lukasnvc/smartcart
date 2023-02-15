import styled from "styled-components";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate, NavLink } from 'react-router-dom';
import FormikInput from "../Components/FormikInput";
import Button from "../Components/Button";
import { size } from "../Utils/breakpoints";
import {useLoginUser} from '../hooks/users'
import { brown } from "../Utils/colors";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginUser } = useLoginUser();
  const { setUser, user } = useContext(UserContext)
  
  const handleSubmit = (values, { setsubmitting, resetForm }) => {
    loginUser(values)
      .then((response) => {
      
        setUser(response)
        navigate('/checkout')
        if (user===null) {
          console.log('neisi')
          }
      })
      .catch((error) => {
      console.log('Login:', error )
      })
    
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  })
  return (
    <>
      <Formik initialValues={{
        email: '',
        password: ''
      }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <StyledForm>
            <Title>Login</Title>
            <FormikInput name='email' type='email' placeholder=' Email'/>
            <FormikInput name='password' type='password' placeholder=' Password'/>
            <Button type='submit'>Login</Button>
            <Slink to={'/register'}>Sign up</Slink>
        </StyledForm>
      </Formik>
    </>
  );
}

export default LoginPage;

const StyledForm = styled(Form)`
  max-width: ${size.mobile};
  color: ${brown};
  padding: 15px;
  background-color: #ffffff;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 5px;
`

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  text-align: center;
  margin: 8px;
  font-size: 18px;
`


