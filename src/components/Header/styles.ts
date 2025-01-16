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

  @media (max-width: 768px) {
    height: 70px;
  }
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
  position: relative;

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 1rem;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    height: 30px;
    width: auto;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
  }
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

  @media (max-width: 768px) {
    display: none;
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

    .search-button {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .wishlist-button {
    @media (max-width: 768px) {
      display: none;
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

  @media (max-width: 768px) {
    gap: 0.75rem;

    button {
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  color: #000000;
  align-items: center;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    display: flex;
  }

  .search-button-mobile {
    color: #000000;
    display: none;
    
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: fixed;
  top: 80px; 
  left: 0;
  background: white;
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .dropdown-content {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }

  @media (max-width: 1200px) {
    .dropdown-content {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: static;
  height: 80px;
  display: flex;
  align-items: center;

  &:hover ${DropdownMenu}, 
  ${DropdownMenu}:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const CollectionCard = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 500;
    text-align: left;
    margin-top: 0.5rem;
  }
`;