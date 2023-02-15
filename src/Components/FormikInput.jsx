import { Field, ErrorMessage } from "formik";
import { bgColor, brown } from "../Utils/colors";
import styled from "styled-components";

const FormikInput = ({name, ...rest}) => {
  return (
    <div>
        <Field as={StyledInput} name={name} {...rest} />
      <ErrorMessage name={name} component='div' />
    </div>
  );
}

export default FormikInput;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  border-radius: 4px;
  color: ${brown};
  background-color: ${bgColor};
  padding: 10px 20px;
  border: none;
  outline: none;
 `