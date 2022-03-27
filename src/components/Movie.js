import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Movie(props) {
    const { title, posterURL, id } = props.movie;

    return (
        <MoviePoster>
            <Link to={'/sessoes/' + id}>
                <img src={posterURL} alt={title} />
            </Link>
        </MoviePoster>
    );
}

const MoviePoster = styled.li`
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);

    &:hover {
        cursor: pointer;
    }
    
    img {
        width: 129px;
        height: 193px;
    }
`;