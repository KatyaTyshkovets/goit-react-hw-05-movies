import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  font-weight: 400;
  text-shadow: 1px 2px 1px 0px #000000; color: #f9f5ed;
  &:not(: last-child) {
    margin-right: 15px;
  }
`;

 const Genres = ({ genres }) => {
  return (
    <List>
      {genres.map(({ id, name }) => (
        <Item key={id} id={id}>
          {name}
        </Item>
      ))}
    </List>
  );
 };

 export default Genres
