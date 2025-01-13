import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, Breadcrumb } from '../styles';
import { CollectionsGrid, CollectionItem } from './styles';

export const Collections: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: 'BATMAN',
      image: 'https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 2,
      name: 'ZOR',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 3,
      name: 'MY HERO ACADEMIA',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 4,
      name: 'CHAMPION',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 5,
      name: 'FUTURE IS BLACK',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 6,
      name: 'HARD TO LOVE X HARDER TO KILL',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  return (
    <PageContainer>
      <CollectionsGrid>
        {collections.map((collection) => (
          <Link 
            to={`/collections/${collection.name.toLowerCase().replace(/\s+/g, '-')}`} 
            key={collection.id}
          >
            <CollectionItem>
              <img src={collection.image} alt={collection.name} />
              <h2>{collection.name}</h2>
            </CollectionItem>
          </Link>
        ))}
      </CollectionsGrid>
    </PageContainer>
  );
};