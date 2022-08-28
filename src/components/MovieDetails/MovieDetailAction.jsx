import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  margin: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: silver;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  &:hover {
    opacity: 1;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

 const MovieDetailAction = () => {
  const location = useLocation().state?.from;

  return (
    <Container>
      <Link to={'cast'} state={{ from: location }}>
        Cast
      </Link>
      <Link to={'reviews'} state={{ from: location }}>
        Reviews
      </Link>
    </Container>
  );
};



export default MovieDetailAction