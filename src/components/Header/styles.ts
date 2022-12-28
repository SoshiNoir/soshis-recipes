import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 11.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 320px) {
    padding: 0px 8px 0px 8px;
}

  @media (max-width: 480px) {
    img {
        max-width: 150px;
        height: 50px; /* So the image doesn't distort */
    }
}

> div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

`;