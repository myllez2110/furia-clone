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

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .collection-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #666;

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
  font-size: 0.875rem;

  span {
    color: #666;
  }

  button {
    padding: 0.25rem 0.5rem;
    border: 1px solid #ddd;
    
    &.active {
      background: #000;
      color: white;
      border-color: #000;
    }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ProductCard = styled.div`
  position: relative;
  background: white;
  
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
    z-index: 2;
    color: #000;
    
    &:hover {
      color: #FF0000;
    }
  }

  .image {
    aspect-ratio: 1;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
  }

  &:hover .image img {
    transform: scale(1.05);
  }

  .info {
    padding: 1rem 0;

    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
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
      }
    }
  }
`;

export const ProfileSection = styled.div`
  max-width: 400px;
  margin: 0 auto;
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
    font-weight: 600;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
  }

  button {
    background: #000000;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    text-align: center;
    font-size: 0.875rem;

    a {
      color: #000000;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;

export const CartSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
      width: 24px;
      height: 24px;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
`;

export const CartSummary = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  height: fit-content;

  h3 {
    font-size: 1rem;
    font-weight: 700;
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
    font-weight: 700;
  }

  button {
    width: 100%;
    background: #000000;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;