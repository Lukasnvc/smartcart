import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from '../Components/FormikInput';
import { size } from '../Utils/breakpoints';
import { brown } from '../Utils/colors';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../hooks/users';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string().required("Passwords don't match")
})

const SignupPage = () => {
  const { mutateAsync: createUser } = useCreateUser();
  const navigate = useNavigate()
  const handleSubmit = (values, { resetForm }) => {
    const { confirm_password, ...user } = values;
    createUser(user)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.log('Failed to create user :', error)
    })
  }
  return (
    <>
      <Formik initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
      }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Title>Registration</Title>
          <FormikInput name='first_name' placeholder='First name' />
          <FormikInput name='last_name' placeholder='Last name' />
          <FormikInput name='email' placeholder='Email' />
          <FormikInput type='password' name='password' placeholder='Password' />
          <FormikInput type='password' name='confirm_password' placeholder='Confirm password' />
          <Button type='submit'>Register</Button>
        </StyledForm>
      </Formik>
    </>
  );
}

export default SignupPage;

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
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 16px;
`

