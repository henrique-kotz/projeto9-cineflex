import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>CINEFLEX</h1>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    width: 100%;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    h1 {
        font-size: 34px;
        font-weight: 400;
        color: #e8833a;
    }
`;