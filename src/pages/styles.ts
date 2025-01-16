import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-top: 80px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 1rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .collection-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding-top: 60px;

    .header h1 {
      font-size: 1.25rem;
    }

    .collection-title {
      font-size: 1.5rem;
    }
  }
`;

export const CartSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
  background-color: white;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 0;
    aspect-ratio: 1;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: none;
      margin: 0;
    }
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

  @media (max-width: 768px) {
    height: 40px;
    font-size: 0.7rem;
  }
`;

export const ProfileSection = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.875rem;

    &:focus {
      outline: none;
      border-color: #000;
    }
  }

  button {
    background: #000;
    color: white;
    padding: 1rem;
    font-weight: 600;
    border-radius: 4px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    text-align: center;
    font-size: 0.875rem;

    a {
      color: #000;
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      width: 30px;
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      
      &:hover {
        border-color: #000;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
    }

    h3 {
      font-size: 0.875rem;
    }

    p {
      font-size: 1rem;
    }

    .quantity button {
      width: 24px;
      height: 24px;
      font-size: 1rem;
    }
  }
`;

export const CartSummary = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  position: sticky;
  top: 100px;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  .summary-total {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
  }

  button {
    width: 100%;
    background: #000;
    color: white;
    padding: 1rem;
    font-weight: 600;
    border-radius: 4px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .summary-total {
      margin: 1rem 0;
    }

    button {
      padding: 0.75rem;
    }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  background: white;
  cursor: pointer;
  transition: transform 0.2s;

  .image {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
  }

  .info {
    padding: 1rem;

    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }

  .price {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .original {
      color: #999;
      text-decoration: line-through;
      font-size: 0.875rem;
    }

    .sale {
      color: #000;
      font-weight: 700;
      font-size: 1rem;
    }
  }

  .discount-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: #000;
    color: white;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 2;
  }

  .wishlist {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover {
    transform: translateY(-5px);

    .image img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .info h3 {
      font-size: 0.75rem;
    }

    .price {
      .original {
        font-size: 0.75rem;
      }
      .sale {
        font-size: 0.875rem;
      }
    }

    .wishlist {
      width: 30px;
      height: 30px;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .discount-badge {
      font-size: 0.7rem;
      padding: 0.2rem 0.4rem;
    }
  }
`;

export const ViewOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  span {
    font-size: 0.75rem;
    color: #666;
    text-transform: uppercase;
  }

  button {
    width: 32px;
    height: 32px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &.active {
      background: #000;
      color: white;
      border-color: #000;
    }

    &:hover:not(.active) {
      border-color: #000;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    button {
      width: 28px;
      height: 28px;
    }
  }
`;