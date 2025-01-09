import React from 'react';
import { Search, Heart, User, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, Nav, Logo, NavLinks, IconsContainer } from './styles';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Nav>
        <NavLinks>
          <Link to="/shop">SHOP ALL</Link>
          <Link to="/collections">COLLECTIONS</Link>
          <Link to="/outlet">OUTLET</Link>
        </NavLinks>
        
        <Link to="/">
          <Logo>
            FVRIA
          </Logo>
        </Link>

        <IconsContainer>
          <button aria-label="Search">
            <Search size={20} />
          </button>
          <button aria-label="Wishlist" onClick={() => navigate('/favorites')}>
            <Heart size={20} />
          </button>
          <button aria-label="Account" onClick={() => navigate('/profile')}>
            <User size={20} />
          </button>
          <button aria-label="Cart" onClick={() => navigate('/cart')}>
            <ShoppingBag size={20} />
            <span className="cart-count">0</span>
          </button>
        </IconsContainer>
      </Nav>
    </HeaderContainer>
  );
};