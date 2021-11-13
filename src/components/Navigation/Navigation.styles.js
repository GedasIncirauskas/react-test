import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0px 5px 11px rgba(29, 0, 62, 0.07);
  a {
    margin-left: 3rem;
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LeftNavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
`;

export const Wrapper = styled.div``;

export const ImageStyle = styled.img`
  width: 6rem;
`;
