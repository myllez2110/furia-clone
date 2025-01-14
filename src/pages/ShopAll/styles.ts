import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: white;
  h1 {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-left: 1rem;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const Breadcrumb = styled.div`
  padding: 0 1rem;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;

  span {
    &:last-child {
      color: #000;
      font-weight: 500;
    }
  }
`;

export const ViewOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-left: auto;
  height: 100%;

  span {
    color: #666;
  }

  button {
    padding: 0.25rem;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    
    &.active {
      background: #000;
      color: white;
      border-color: #000;
    }

    &:hover:not(.active) {
      border-color: #999;
    }
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  transition: border-color 0.2s;
  margin-right: 1rem;
  &:hover {
    border-color: #999;
  }

  svg {
    margin-top: 1px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const FilterMenu = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-400px'};
  width: 400px;
  height: 100vh;
  background: white;
  z-index: 999;
  transition: right 0.3s ease;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  button {
    color: #666;
    
    &:hover {
      color: #000;
    }
  }
`;

export const FilterSection = styled.div`
  padding: 1.5rem;
`;

export const FilterOption = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-size: 0.875rem;
  color: #000;
  text-align: left;

  span {
    font-weight: 500;
  }

  &:hover {
    opacity: 0.7;
  }
`;