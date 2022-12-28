import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

  input {
    height: 39px;
    background: red;
    border-radius: 6px;
    width: 100%;
    border: none;
    background: ${props => props.theme.colors['base-input']};
    color: ${props => props.theme.colors['white']};
  }

  input::placeholder {
      padding-left: 1px;
    }

  button {
  margin-right: 2px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  padding: 6px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.primary};
  }

  button:hover {
  background-color: white;
  transition: 0.32s ease-in-out;
}

  p {
    color: ${props => props.theme.colors.primary};
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }

`;
