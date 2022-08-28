import styled from 'styled-components';
import imagePlaceholder from '../../images/imagePlaceholder.jpg'
import Genres from './Genres';


const Container = styled.div`
  display: flex;
`;


const Image = styled.img`
  border-radius: 4px;
  margin-right: 15px;
  width: 250px;
  height: 350px;
`;

const Title = styled.h2`
font-size: 36px;
  margin-bottom: 40px;
  text-shadow: 1px 2px 1px 0px #000000; color: #f9f5ed;
`;
const Text = styled.p`
  font-weight: 400;
  text-shadow: 1px 2px 1px 0px #000000; color: #f9f5ed;
`;

const Span = styled.span`
  font-weight: 700;
  text-shadow: 1px 2px 1px 0px #000000; color: #f9f5ed;
`;


const MovieData = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres, release_date } =
    movie;
  return (
    <>
      <Container>
        <Image
         src= {
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : imagePlaceholder
          }
         
          alt={title}
        />
        <div>
          <Title>
            {title}({new Date(release_date).getFullYear()})
          </Title>
          <Text>
            <Span>Rated : </Span>
            {vote_average}
          </Text>
          <Text>
            <Span>Overview</Span>
            <br />
            {overview}
          </Text>
          <Span>Genres</Span>
          {genres && <Genres genres={genres} />}
        </div>
      </Container>
    </>
  );
};



export default MovieData;