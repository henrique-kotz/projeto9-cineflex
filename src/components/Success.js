import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Success({ info, setInfo }) {
    const { title, date, showtime, seats, name, cpf } = info;
    const cpfFormat = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9)}`;
    const navigate = useNavigate();

    function backHome() {
        setInfo({});
        navigate('/');
    }

    return (
        <Container>
            <h2>Pedido feito com sucesso!</h2>

            <div>
                <Title>Filme e sessão</Title>
                <Text>{title}</Text>
                <Text>{date} {showtime}</Text>
            </div>

            <div>
                <Title>Ingressos</Title>
                {seats.map((s, i) => <Text key={i}>Assento {s}</Text>)}
            </div>

            <div>
                <Title>Comprador</Title>
                <Text>{name}</Text>
                <Text>{cpfFormat}</Text>
            </div>

            <button onClick={backHome}>Voltar pra Home</button>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 28px;

    h2 {
        font-weight: 700;
        color: #247a6b;
    }

    div {
        margin-bottom: 50px;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 40px;
        background-color: #e8833a;
        border: none;
        border-radius: 3px;
        align-self: center;
        
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

const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    color: #293845;
    margin-bottom: 6px;
`;

const Text = styled.p`
    font-size: 22px;
    font-weight: 400;
    line-height: 25px;
    color: #293845;
`;