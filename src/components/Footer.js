import styled from 'styled-components';

export default function Footer({ data }) {
    if (data.day) {
        const { title, posterURL } = data.movie;
        const { weekday, date } = data.day;

        return (
            <footer>
                <Container>
                    <Poster>
                        <img src={posterURL} alt={title} />
                    </Poster>
                    <div>
                        <p>{title}</p>
                        <p>{weekday} - {date}</p>
                    </div>
                </Container>
            </footer>
        );
    } else {
        const { title, posterURL } = data;

        return (
            <footer>
                <Container>
                    <Poster>
                        <img src={posterURL} alt={title} />
                    </Poster>
                    <p>{title}</p>
                </Container>
            </footer>
        );
    }
}

const Container = styled.div`
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;

    p {
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        color: #293845;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Poster = styled.div`
    width: 64px;
    height: 89px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    margin-right: 14px;

    img {
        width: 48px;
        height: 72px;
        margin: auto;
    }
`;