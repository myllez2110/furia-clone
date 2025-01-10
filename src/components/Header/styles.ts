import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  height: 80px;
  border-bottom: 1px solid #E5E5E5;
`;

export const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: #000000;
  font-family: 'Arial Black', sans-serif;
  letter-spacing: -1px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #000000;
    font-weight: 400;
    font-size: 0.75rem;
    letter-spacing: 0.1px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-right: 0;

  button {
    color: #000000;
    transition: opacity 0.2s;
    position: relative;

    &:hover {
      opacity: 0.7;
    }
  }

  .chevron-right {
    top: 100px;
    left: 0;
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
`



;