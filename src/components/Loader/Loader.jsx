import styled from "styled-components";
import {RotatingLines}  from 'react-loader-spinner';

export const Spiner = styled.div`
margin: 0 auto;
margin-top: 20px;
display:flex;
justify-content: center;
`;

const Loader =() => {
    return (
      <Spiner>
    <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
            
            </Spiner>
  );
}

export default Loader