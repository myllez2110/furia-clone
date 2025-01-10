import React from 'react';
import { Products } from '../../components/ProductGrid';
import { PageContainer } from '../styles';

export const ShopAll: React.FC = () => {
  return (
    <PageContainer>
      <Products />
    </PageContainer>
  );
};