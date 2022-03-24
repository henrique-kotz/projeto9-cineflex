import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <section className="catalog">
        <h2>Selecione o filme</h2>
        <ul>
            {movieList.map(movie => <Movie key={movie.id} movie={movie} />)}
        </ul>
    </section>    
    ) : <Loading />;
}