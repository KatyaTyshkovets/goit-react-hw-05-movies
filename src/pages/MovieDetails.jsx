import { fetchDataMovie } from '../services/movieApi';
import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import  MovieData  from '../components/MovieCategory/MovieData';
import MovieDetailAction from '../components/MovieDetails/MovieDetailAction';
import styled from 'styled-components';

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  width: 150px;
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
`;

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchDataMovie(movieId).then(data => {
      setData(data);
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Back to movies</Link>
      <MovieData movie={data} />
      <MovieDetailAction />
      <Outlet />
    </>
  );
};

export default MovieDetails;
