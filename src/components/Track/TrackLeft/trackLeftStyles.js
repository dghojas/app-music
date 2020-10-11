import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const PlayerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const SongImage = styled.img`
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 5px;
    overflow: hidden;
    ${({ hasAlbum }) =>
        hasAlbum
            ? css`
          cursor: pointer;
        `
            : null}
`;

export const SongTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px 1rem 0;
`;

export const SongName = styled(Link)`
  color: #1d1b1a;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin-right: auto;

  :hover {
    border-color: #fff;
  }
`;

export const SongNameText = styled.p`
  color: #1d1b1a;
`;

export const SongArtist = styled(SongName)`
  color: #b3b3b3;
  font-size: 12px;
  :hover {
    border-color: #b3b3b3;
    border-bottom-width: 1px;
  }
`;
