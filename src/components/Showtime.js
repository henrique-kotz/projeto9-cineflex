import styled from 'styled-components';

export default function Showtime(props) {
    const { date, weekday, showtimes } = props.session;

    return (
        <Day>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map(time => <button key={time.id}>{time.name}</button>)}
            </div>
        </Day>
    );
}

const Day = styled.li`
    p {
        font-size: 20px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 22px;
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 23px;
    }

    button {
        width: 83px;
        height: 43px;
        margin-right: 8px;
        border-radius: 3px;
        border: none;

        background-color: #e8833a;
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