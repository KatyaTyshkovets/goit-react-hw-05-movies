import styled from "styled-components";
import { MdOutlineImageSearch } from 'react-icons/md';
import { Field, Form, Formik } from "formik";


const Header = styled.header`
 top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`;
const SearchForm = styled(Form)`
display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
 const Input = styled(Field)`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;

export const Searchbar = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
    <Header>
      <SearchForm>
        <Button type="submit">
          <MdOutlineImageSearch size={30} />
        </Button>
        <Input type="text" name="query" />
        </SearchForm>
         </Header>
    </Formik>
   

  );
};

 

export default Searchbar;