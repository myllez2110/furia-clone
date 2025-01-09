import React from 'react';
import { Heart } from 'lucide-react';
import { PageContainer, ProductGrid, ProductCard, Breadcrumb, ViewOptions } from '../styles';

export const Outlet: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'CALÇA JOGGER FURIA PRETA',
      price: 349.00,
      salePrice: 244.30,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      name: 'CALÇA MOLETOM FURIA MAGIC PANTHERA AZUL',
      price: 349.00,
      salePrice: 244.30,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      name: 'CALÇA MOLETOM FURIA MAGIC PANTHERA LARANJA',
      price: 349.00,
      salePrice: 244.30,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      name: 'CALÇA MOLETOM FURIA MAGIC PANTHERA PRETA',
      price: 349.00,
      salePrice: 244.30,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <PageContainer>
      <Breadcrumb>
        <span>HOME</span>
        <span>/</span>
        <span>OUTLET</span>
      </Breadcrumb>

      <div className="header">
        <h1>OUTLET</h1>
        <ViewOptions>
          <span>VISUALIZAÇÃO:</span>
          <button className="active">⠿</button>
          <button>☰</button>
        </ViewOptions>
      </div>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            {product.discount && (
              <div className="discount-badge">{product.discount}% OFF</div>
            )}
            <button className="wishlist">
              <Heart size={20} />
            </button>
            <div className="image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
              <h3>{product.name}</h3>
              <div className="price">
                <span className="original">R$ {product.price.toFixed(2)}</span>
                <span className="sale">R$ {product.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </ProductCard>
        ))}
      </ProductGrid>
    </PageContainer>
  );
};