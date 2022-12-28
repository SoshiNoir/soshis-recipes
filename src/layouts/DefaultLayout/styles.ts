import styled from 'styled-components';

export const LayoutContainer = styled.div`
  > main {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    @media (max-width: 54rem) {
      padding: 0 1rem;
    }
  }
`;