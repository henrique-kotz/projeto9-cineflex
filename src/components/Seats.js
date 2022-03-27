import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Footer from './Footer';
import Loading from './Loading';

export default function Seats() {
    const seatsInfo = [{
        description: 'Selecionado',
        color: '#8DD7CF',
        border: '#1AAE9E'
    },
    {
        description: 'Disponível',
        color: '#C3CFD9',
        border: '#7B8B99'
    },
    {
        description: 'Indisponível',
        color: '#FBE192',
        border: '#F7C52B'
    }];

    const [sessionData, setSessionData] = useState(null);
    const [seats, setSeats] = useState(null);
    const [reservation, setReservation] = useState({
        ids: [],
        name: '',
        cpf: ''
    });
    const { idSessao } = useParams();

    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
            .then(res => {
                setSessionData(res.data);
                setSeats(res.data.seats);
            })
            .catch(err => console.log(err.response))
    }, []);

    function selectSeat(seat) {
        if (seat.isAvailable) {
            if (seat.isSelected) {
                seat.isSelected = false;
                setSelectedSeats([...selectedSeats].filter(elem => elem !== seat.id));
            } else {
                seat.isSelected = true;
                setSelectedSeats([...selectedSeats, seat.id]);
            }
        } else {
            alert('Esse assento não está disponível');
        }
    }

    return seats ? (
    <>
        <Container>
            <h2>Selecione o(s) assento(s)</h2>

            <SeatsDiagram>
                <ul>
                    {seats.map(seat => 
                        <SeatIcon key={seat.id} 
                         isAvailable={seat.isAvailable}
                         isSelected={seat.isSelected}
                         onClick={() => selectSeat(seat)}>
                            {seat.name}
                        </SeatIcon>)}
                </ul>
            </SeatsDiagram>

            <DescriptionWrapper>
                {seatsInfo.map((info, index) => 
                    <SeatDescription key={index} color={info.color} border={info.border}>
                        <div></div>
                        <p>{info.description}</p>
                    </SeatDescription>)}
            </DescriptionWrapper>
            
            <FormWrapper>
                <form onSubmit={() => console.log('opa')}>
                    <label htmlFor='name'>Nome do comprador:</label>
                    <input type='text' id='name' placeholder='Digite seu nome...'></input>

                    <label htmlFor='cpf'>Digite seu CPF...</label>
                    <input type='text' id='cpf' placeholder='Digite seu CPF...'></input>

                    <button type='submit'>Reservar assento(s)</button>
                </form>
            </FormWrapper>

        </Container>
        <Footer data={sessionData} />
    </>
    ) : <Loading />;
}

const Container = styled.section`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 140px;
`;

const SeatsDiagram = styled.div`
    width: 100%;

    ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const SeatIcon = styled.li`
    width: 24px;
    height: 24px;
    margin: 0 4px 18px;
    background-color: ${props => props.isAvailable ? 
                            (props.isSelected ? '#8DD7CF' : '#C3CFD9') : '#FBE192'};
    border: 1px solid ${props => props.isAvailable ? 
                            (props.isSelected ? '#1AAE9E' : '#7B8B99') : '#F7C52B'};
    border-radius: 17px;

    font-size: 11px;
    font-weight: 400;
    
    display:flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const SeatDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 24px;
        height: 24px;
        background-color: ${props => props.color};
        border: 1px solid ${props => props.border};
        border-radius: 17px;
        margin-bottom: 10px;
    }

    p {
        font-size: 13px;
        font-weight: 400;
        text-align: center;
        color: #4e5a65;
    }
`;

const FormWrapper = styled.div`
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    label {
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        color: #293845;
        align-self: flex-start;
    }

    input {
        width: 100%;
        height: 51px;
        margin-bottom: 7px;
        padding-left: 18px;
        background-color: #fff;
        border: 1px solid #d4d4d4;
        border-radius: 3px;
        font-size: 18px;
    }
    input::placeholder {
        color: #afafaf;
        font-style: italic;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 60px;
        background-color: #e8833a;
        border: none;
        border-radius: 3px;
        
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
    button:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
`;