import styled from 'styled-components';

export const ProductsContainer = styled.section`
  max-width: 1400px;
  margin: 6rem auto 2rem;
  padding: 0 2rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ProductCard = styled.div`
  position: relative;
  background: #FFFFFF;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
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

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  
  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.5rem;
  }
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #000000;
`;