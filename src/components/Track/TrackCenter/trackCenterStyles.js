import styled from 'styled-components';

export const PlayerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlayerCenterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

export const PlayIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid #1d1b1a;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }
`;
