import styled, { css } from 'styled-components';

export const ProductsContainer = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductImage = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  
  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const WishlistButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  background: #FFFFFF;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    color: #FF0000;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    top: 0.5rem;
    right: 0.5rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ProductCard = styled.div<{ $viewMode?: 'grid' | 'list' }>`
  position: relative;
  background: #FFFFFF;
  cursor: pointer;
  transition: transform 0.2s;

  ${props => props.$viewMode === 'list' && css`
    display: flex;
    gap: 2rem;

    ${ProductImage} {
      width: 200px;
      flex-shrink: 0;

      @media (max-width: 768px) {
        width: 120px;
      }
    }

    ${ProductInfo} {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 1rem;

      ${ProductImage} {
        width: 100%;
      }
    }
  `}

  &:hover {
    transform: translateY(-5px);
  }

  &:hover ${ProductImage} img {
    transform: scale(1.05);
  }
`;