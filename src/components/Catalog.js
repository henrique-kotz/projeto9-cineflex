import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Movie from './Movie';
import Loading from './Loading';

export default function Catalog() {
    const [movieList, setMovieList] = useState(null);

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
            .then((res => setMovieList(res.data)))
            .catch(err => console.log(err.response))
    }, []);

    return movieList ? (
    <CatalogSection>
        <h2>Selecione o filme</h2>
        <ul>
            {movieList.map(movie => <Movie key={movie.id} movie={movie} />)}
        </ul>
    </CatalogSection>    
    ) : <Loading />;
}

const CatalogSection = styled.section`
ul {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
li {
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
}
img {
    width: 129px;
    height: 193px;
}
`;