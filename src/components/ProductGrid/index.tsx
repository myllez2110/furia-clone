import React from 'react';
import { Heart } from 'lucide-react';
import { 
  ProductsContainer, 
  ProductGrid, 
  ProductCard, 
  ProductImage, 
  ProductInfo,
  WishlistButton,
  Price 
} from './styles';

export const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'JAQUETA FURIA X ZOR VERDE MILITAR',
      price: 399.00,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'JAQUETA FURIA X ZOR PRETA',
      price: 399.00,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'CAMISETA OVERSIZED FURIA X ZOR WOODHORSE',
      price: 149.00,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'CAMISETA OVERSIZED FURIA X ZOR VERDE',
      price: 179.00,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <ProductsContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <WishlistButton>
              <Heart size={20} />
            </WishlistButton>
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>
            <ProductInfo>
              <h3>{product.name}</h3>
              <Price>R$ {product.price.toFixed(2)}</Price>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};