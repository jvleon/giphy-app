import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const ImageContainer = styled.div`
  display: inlinex-flex;
  height: 150px;
  flex-grow: 1;
`;

export const Loader = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .spinner-grow-xl {
    height: 8rem;
    width: 8rem;
    margin-bottom: 1rem;
  }
`;
