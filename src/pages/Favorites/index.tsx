import React from 'react';
import { Products } from '../../components/ProductGrid';
import { PageContainer } from '../styles';

export const Favorites: React.FC = () => {
  return (
    <PageContainer>
      <Products />
    </PageContainer>
  );
};