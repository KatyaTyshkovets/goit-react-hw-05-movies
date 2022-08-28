import { fetchDataMovie } from '../services/movieApi';
import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import  MovieData  from '../components/MovieCategory/MovieData';
import MovieDetailAction from '../components/MovieDetails/MovieDetailAction';
import styled from 'styled-components';
import {TbArrowBigLeftLines} from 'react-icons/tb'

const Link = styled(NavLink)`
  
  color: silver;
  border: none;
  cursor: pointer;
  
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
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
      <Link to={backLinkHref}>
        <TbArrowBigLeftLines size={50}/>
      </Link>
      <MovieData movie={data} />
      <MovieDetailAction />
      <Outlet />
    </>
  );
};

export default MovieDetails;
