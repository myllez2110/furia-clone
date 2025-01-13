import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer, Breadcrumb } from '../styles';
import { Products } from '../../components/ProductGrid';

export const Collection: React.FC = () => {
  const { collectionName } = useParams();
  
  const formatCollectionName = (name: string) => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <PageContainer>
      <h1 className="collection-title">{formatCollectionName(collectionName || '')}</h1>
      <Products />
    </PageContainer>
  );
};