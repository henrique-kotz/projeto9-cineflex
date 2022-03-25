import styled from 'styled-components';

import loading from '../assets/img/loading.gif';

export default function Loading() {
    return (
        <LoadingBox>
            <img src={loading} alt="Loading..." />
        </LoadingBox>
    );
}

const LoadingBox = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;