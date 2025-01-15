import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Products } from '../../components/ProductGrid';
import { PageContainer } from '../styles';
import { 
  Header, 
  Breadcrumb, 
  ViewOptions, 
  FilterButton,
  FilterMenu,
  FilterHeader,
  FilterSection,
  FilterOption,
  Overlay
} from './styles';

export const ShopAll: React.FC = () => {
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <PageContainer>
      <Breadcrumb>
        <span>HOME</span>
        <span>/</span>
        <span>PRODUTOS</span>
        <ViewOptions>
            <span>VISUALIZAÇÃO:</span>
            <button 
              className={activeView === 'grid' ? 'active' : ''} 
              onClick={() => setActiveView('grid')}
              aria-label="Grid view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button 
              className={activeView === 'list' ? 'active' : ''} 
              onClick={() => setActiveView('list')}
              aria-label="List view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </ViewOptions>
      </Breadcrumb>

      <Header>
        <h1>PRODUTOS</h1>
        <div className="right-section">
          <FilterButton onClick={toggleFilter}>
            FILTROS
              <ArrowRight size={16} />
          </FilterButton>
          
        </div>
      </Header>

      <Products viewMode={activeView} />

      {isFilterOpen && <Overlay onClick={toggleFilter} />}
      
      <FilterMenu $isOpen={isFilterOpen}>
        <FilterHeader>
          <h2>FILTRO</h2>
          <button onClick={toggleFilter}>
            <X size={24} />
          </button>
        </FilterHeader>

        <FilterSection>
          <FilterOption>
            <span>Ordenar por:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Tamanho:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Categoria:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Marcas:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Acessórios:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Coleções:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Collabs:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Vestuário:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>

          <FilterOption>
            <span>Preço</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FilterOption>
        </FilterSection>
      </FilterMenu>
    </PageContainer>
  );
};