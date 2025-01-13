import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 100%;
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
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: 80px;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
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
  gap: 1rem;
  align-items: center;

  a {
    color: #000000;
    font-weight: 450;
    font-size: 0.8rem;
    letter-spacing: 0.2px;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    gap: 4px;
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