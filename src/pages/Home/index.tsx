import React from 'react';
import { Products } from '../../components/ProductGrid';
import { PageContainer, ImageContainer } from '../styles';

export const Home: React.FC = () => {
  return (
    <PageContainer>
        <ImageContainer>
          <img src="https://furiagg.fbitsstatic.net/img/b/af5e3b39-0cda-4942-b81b-3b0accebbcd8.jpg?w=1366&v=no-change" alt="Furia banner" />
        </ImageContainer>
      <Products />
    </PageContainer>
  );
};