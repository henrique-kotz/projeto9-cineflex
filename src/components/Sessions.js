import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Showtime from './Showtime';
import Footer from './Footer';
import Loading from './Loading';

export default function Sessions() {
    const [movieData, setMovieData] = useState(null);
    const [showtimes, setShowtimes] = useState(null);
    const { idFilme } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        .then(res => {
            setMovieData(res.data);
            setShowtimes(res.data.days);
        })
        .catch(err => console.log(err.response))
    } ,[]);

    return showtimes ? (
    <>
        <SessionsContainer>
            <h2>Selecione o horário</h2>
            <ul>
                {showtimes.map(s => <Showtime key={s.id} session={s} />)}
            </ul>
        </SessionsContainer>
        <Footer data={movieData} />
    </>
    ) : <Loading />;
}

const SessionsContainer = styled.section`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 140px;
`;