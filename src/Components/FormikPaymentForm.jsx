import { Formik, Form, useField, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { bgColor } from '../Utils/colors';
import FormikInput from './FormikInput';
import Button from './Button';
import FormikSelect from './FormikSelect';
import { options } from '../Utils/countriesArray';


const validationSchema = Yup.object().shape({
  country: Yup.object().required('Country is required'),
  address: Yup.string().required('Address is required'),
  postal_code: Yup.string().required('Postal code is required'),
  city: Yup.string().required('City is required'),
  phone_number: Yup.number().required('Phone number is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  card_number: Yup.number().required('Card number is required'),
  cvv: Yup.number().required('CVV code is required'),
})

const FormikPaymentForm = () => {
  const navigate = useNavigate();
  const { resetCart } = useContext(CartContext);

  const handleSubmit = (value, { resetForm }) => {
    resetCart();
    resetForm();
    navigate('/');
    console.log(value)
  }
  return (
    <Formik
    initialValues={{
      country: '',
      address: '',
      postal_code: '',
      city: '',
      phone_number: '',
      first_name: '',
      last_name: '',
      card_number: '',
      cvv: ''
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
      <StyledForm>
        <Title>Contact Details</Title>
        <FormikSelect 
          name='country'
          placeholder='Country'
          options={options}
          />
      <FormikInput name='address'
          placeholder='Address'
        />
      <StyledRow>
        <RowItem>
          <FormikInput name='postal_code'
            placeholder='Postal code'
          />
        </RowItem>
        <RowItem>
          <FormikInput name='city'
            placeholder='City'
          />
        </RowItem>
      </StyledRow>
      <FormikInput name='phone_number'
        placeholder='Phone number'
      />
      <Title>Card Details</Title>
      <StyledRow>
        <RowItem>
          <FormikInput name='first_name'
            placeholder='First name'
          />
        </RowItem>
        <RowItem>
          <FormikInput name='last_name'
            placeholder='Last name'
          />
        </RowItem>
      </StyledRow>
      <StyledRow>
        <CardInput>
          <FormikInput name='card_number'
            type='number'
            placeholder='Card number'
          />
        </CardInput>
        <RowItem>
          <FormikInput name='cvv'
            type='number'
            placeholder='CVV'
          />
        </RowItem>
      </StyledRow>
      <Button>Confirm</Button>
      </StyledForm>
      </Formik>
  );
}

export default FormikPaymentForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  padding-bottom: 8px;
  border-bottom: 1px solid ${bgColor};
  margin-left: 10px;
  margin-bottom: 0;
`;

const StyledRow = styled.div`
 display: flex;
 gap: 16px;
`;

const RowItem = styled.div`
flex: 1;
`;

const CardInput = styled.div`
  flex: 3;
`;