import styled from 'styled-components';

export const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 300px;
  height: 100vh;
  background-color: white;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  span {
    font-size: 1rem;
  }
`; 