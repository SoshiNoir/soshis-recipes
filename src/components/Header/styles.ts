import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  a {
    color: ${props => props.theme.colors['base-text']};
    font-weight: 700;
    font-size: ${props => props.theme.textSizes.xl};
  }

  a:hover {
    color: ${props => props.theme.colors['white']};
  }
}

button {
  width: 93px;
  height: 39.5px;
  margin-right: 2px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  padding: 6px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.primary};

  p {
    color: ${props => props.theme.colors.primary};
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
}

button:hover {
  background-color: white;
  transition: 0.32s ease-in-out;
}

`;