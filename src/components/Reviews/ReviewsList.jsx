import styled from "styled-components";
import PropTypes from 'prop-types';

const Item = styled.li`
border-bottom: 1px solid #00000;
margin:0;
&:not(last-child){
    margin-bottom: 20px;
}
`;
const Text = styled.p`
text-shadow: 1px 2px 1px 0px #000000; color: #f9f5ed;
`;

const ReviewsList = ({ reviews }) => {
    return (
        <ol>
            {reviews.map(({ id, author,content }) => (
                <Item key={id}>
                    <h2>{ author}</h2>
                    <Text>{content}</Text>
                </Item>
            ))}
        </ol>
    );
};

export default ReviewsList;

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            content: PropTypes.string,
        })
    )
}


