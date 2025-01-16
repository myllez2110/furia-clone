import React from 'react';
import { X, Heart, ChevronRight } from 'lucide-react';
import { 
  MenuContainer,
  MenuHeader,
  MenuSection,
  MenuItem
} from './styles';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <MenuContainer $isOpen={isOpen}>
      <MenuHeader>
        <h2>FILTRO</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </MenuHeader>

      <MenuSection>
        <MenuItem>
          <Heart size={20} />
          <span>FAVORITOS</span>
        </MenuItem>

        <MenuItem>
          <span>SHOP ALL</span>
          <ChevronRight size={20} />
        </MenuItem>

        <MenuItem>
          <span>COLLECTIONS</span>
          <ChevronRight size={20} />
        </MenuItem>

        <MenuItem>
          <span>OUTLET</span>
        </MenuItem>
      </MenuSection>
    </MenuContainer>
  );
}; 