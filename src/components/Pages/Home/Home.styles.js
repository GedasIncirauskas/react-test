import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 0.5rem;
  margin: 2rem auto;
  width: 70%;
`;

export const CardStyle = styled.div`
  border: 0.1rem solid #eee;
  border-radius: 1rem;
  padding: 2rem 1rem;
`;
