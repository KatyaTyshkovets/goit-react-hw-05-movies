import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/movieApi';
import CastList from 'components/MovieCast/CastList';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(data => {
      setCasts(data.cast);
    });
  }, [movieId]);

  return casts && casts.length > 0 ? (
        <CastList casts={casts} />
    ) : (
            <h2> We don't have any cast for this movie.</h2>
    )
};

export default Cast;
