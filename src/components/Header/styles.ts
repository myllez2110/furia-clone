import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FFFFFF;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #E5E5E5;
`;

export const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: #000000;
  font-family: 'Arial Black', sans-serif;
  letter-spacing: -1px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #000000;
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  button {
    color: #000000;
    transition: opacity 0.2s;
    position: relative;

    &:hover {
      opacity: 0.7;
    }
  }

  .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 0.75rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;