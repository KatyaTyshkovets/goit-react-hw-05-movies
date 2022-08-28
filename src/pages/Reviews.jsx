import ReviewsList from "components/Reviews/ReviewsList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import{fetchMovieReviews} from '../services/movieApi';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then(data => {
            setReviews(data.results);
        }
        )
    }, [movieId]);
    return reviews && reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
    ) : (
            <h2> We don't have any reviews for this movie.</h2>
    )
};

export default Reviews