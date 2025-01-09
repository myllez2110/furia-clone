import React from 'react';
import { Products } from '../../components/ProductGrid';
import { PageContainer, PageTitle } from '../styles';

export const ShopAll: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>SHOP ALL</PageTitle>
      <Products />
    </PageContainer>
  );
};