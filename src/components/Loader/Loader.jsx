import React from 'react';
import { StageSpinner } from 'react-spinners-kit';

import styled from 'styled-components';

const LoaderContainer = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loader = ({ isLoading }) => (
    <LoaderContainer>
        <StageSpinner size={45} color="#1db954" loading={isLoading} />
    </LoaderContainer>
);

export default Loader;
