import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery';
import  Searchbar  from 'components/Searchbar';
import { fetchSearchMovies } from '../services/movieApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let name = searchParams.get('name') ?? '';
    if (name === '') {
      return;
    }
    fetchSearchMovies({ query: name }).then(data => {
      if (data.length === 0) {
        setData([]);
        toast.error(
          'Sorry, there are no movies matching your search query. Please try again.',
          {
            autoClose: 2000,
            theme: 'colored',
          }
        );
        return
      } setData(data.results);
    });
  }, [searchParams]);

  const onFormSubmit = value => {
    if (value.query === '') {
      toast.warn('Please entry search movie!',
       {
              autoClose: 2000,
              theme: 'colored',
            }
      );
    }
    const params = value.query !== '' ? { name: value.query } : {};
    setSearchParams(params);
  };

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} value={searchParams.get('name')} />
      <MoviesGallery movies={data} />
    </>
  );
};

export default Movies;
