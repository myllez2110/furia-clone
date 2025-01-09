import React from 'react';
import { Products } from '../../components/ProductGrid';
import { PageContainer, PageTitle } from '../styles';

export const Favorites: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>MY FAVORITES</PageTitle>
      <Products />
    </PageContainer>
  );
};