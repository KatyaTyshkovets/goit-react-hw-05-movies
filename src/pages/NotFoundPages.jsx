
import { Link } from '../components/Wrapper/Wrapper.styled';
import styled from "styled-components";

const Container = styled.div`
color: red;
display:flex;
align-items: center;
justify-content: center;
`

const NotFoundPage = () => {
    return (
        <Container>
            <h2>404 сторінки не знайдено</h2>
            <Link to="/">Перейти на стартову сторінку</Link>
        </Container>
    )
}
export default NotFoundPage
