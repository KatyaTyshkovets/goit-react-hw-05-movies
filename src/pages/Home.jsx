import { useEffect, useState } from 'react';
import { fetchMovieTrending } from '../services/movieApi';
import { MoviesGallery } from '../components/MoviesGallery';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieTrending().then(data => {
      setData(data.results);
    });
  }, []);

  return (
    <>
      <MoviesGallery movies={data} />
    </>
  );
};

export default Home;
