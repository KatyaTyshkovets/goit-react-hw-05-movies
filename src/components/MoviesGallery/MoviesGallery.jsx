import { Item } from '../Item/Item';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MoviesGallery = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path, name }) => (
        <Item key={id} id={id} title={title ? title : name} src={poster_path} />
      ))}
    </List>
  );
};
