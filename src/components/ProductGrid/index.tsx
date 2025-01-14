import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  ProductsContainer, 
  ProductGrid as Grid, 
  ProductList,
  ProductCard, 
  ProductImage, 
  ProductInfo,
  WishlistButton,
  Price 
} from './styles';

interface ProductsProps {
  viewMode?: 'grid' | 'list';
}

export const Products: React.FC<ProductsProps> = ({ viewMode = 'grid' }) => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: 'BONE 9FORTY TRUCKER FURIA X NEW ERA BRANCO',
      price: 209.90,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      slug: 'bone-9forty-trucker-furia-x-new-era-branco'
    },
    {
      id: 2,
      name: 'BONE 9TWENTY FURIA X NEW ERA BRANCO E PRETO',
      price: 199.90,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      slug: 'bone-9twenty-furia-x-new-era-branco-e-preto'
    },
    {
      id: 3,
      name: 'BONE 9TWENTY FURIA X NEW ERA PRETO E BRANCO',
      price: 199.90,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      slug: 'bone-9twenty-furia-x-new-era-preto-e-branco'
    },
    {
      id: 4,
      name: 'BONE FURIA FURIOSA PRETO',
      price: 119.00,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d',
      slug: 'bone-furia-furiosa-preto'
    }
  ];

  const ProductContainer = viewMode === 'grid' ? Grid : ProductList;

  const handleWishlist = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    // Handle wishlist logic here
  };

  const handleProductClick = (slug: string) => {
    navigate(`/product/${slug}`);
  };

  return (
    <ProductsContainer>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            $viewMode={viewMode}
            onClick={() => handleProductClick(product.slug)}
          >
            <WishlistButton onClick={(e) => handleWishlist(e, product.id)}>
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
      </ProductContainer>
    </ProductsContainer>
  );
};