import { Suspense } from "react";
import { Outlet } from "react-router";
import { Container, Header, Link } from '../Wrapper//Wrapper.styled';
import { ToastContainer } from "react-toastify";
import Loader from "components/Loader/Loader";
import { GiFilmSpool } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Logo = styled(NavLink)`
padding: 10px;
display: flex;
align-items: center;
color: grey;
font-family: 'Dancing Script, cursive';
font-size: 24px;
font-weight: 700;
  };
  &:hover {
    color: silver;
    cursor: pointer;
  };
`;

const SharedLayout = () => {
    return (
        <>
        <Header>
          <Logo to="/">
          <GiFilmSpool/>
          LikedMovie
        </Logo>
         <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
          </nav>
            </Header>
             
            <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
            </Container>
      <ToastContainer />    
            </>
    )
}

export default SharedLayout