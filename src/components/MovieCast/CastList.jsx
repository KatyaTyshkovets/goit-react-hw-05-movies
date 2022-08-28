
import PropTypes from 'prop-types';
import imagePlaceholder from '../../images/imagePlaceholder.jpg';
import styled from "styled-components";


const List = styled.ul`
padding: 0;
list-style-type: none;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

const Item = styled.li`
margin-bottom:15px;
`;

const Image = styled.img`
width: 150px;
height: 200px;
border-radius: 7px;
`;
const Name = styled.p`
margin-bottom: 5px; 
text-shadow: 1px 2px 1px 0px #000000; color: #f9f5ed;
`;

const CastList = ({casts}) => {
   
    return (
        <>
            {casts && (
                <List>
                    {casts.map(actor => {
                        return (
                            <Item key={actor.cast_id}>
                                <Image
                                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : imagePlaceholder
                    }
                                    alt={actor.name}
                                />
                                <Name>{actor.name}</Name>
                            </Item>
                        );
                    })}
                </List>
                
            )}
           
        </>
    )

}

export default CastList;

CastList.propTypes = {
    cast: PropTypes.string,
};
