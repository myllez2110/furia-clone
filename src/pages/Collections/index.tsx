import React from 'react';
import { PageContainer, CollectionsGrid, CollectionCard } from '../styles';

export const Collections: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: 'FURIA X BATMAN',
      image: 'https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 2,
      name: 'FURIA X ZOR',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 3,
      name: 'MY HERO ACADEMIA X FURIA',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  return (
    <PageContainer>
      <CollectionsGrid>
        {collections.map((collection) => (
          <CollectionCard key={collection.id}>
            <img src={collection.image} alt={collection.name} />
            <h2>{collection.name}</h2>
          </CollectionCard>
        ))}
      </CollectionsGrid>
    </PageContainer>
  );
};