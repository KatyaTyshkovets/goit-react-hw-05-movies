import {  Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { lazy, Suspense } from 'react';
import NotFoundPages from 'pages/NotFoundPages';
import Loader from 'components/Loader/Loader';




const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));


export const  App = () => {
  return (
    
     <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPages />} />
        </Route>
      </Routes>
    </Suspense>
 
  );
}


