import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar content'
    'player player';

  grid-template-columns: 230px 1fr;
  grid-template-rows: calc(100vh - 100px) 100px;
`;

export const SectionContainer = styled.div`
  grid-area: content;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
  background-color: #fff;
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #1db954;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1db954;
  }
`;
