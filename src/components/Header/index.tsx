import React from 'react';
import { Search, Heart, User, ShoppingBag, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HeaderContainer, 
  Nav, 
  Logo, 
  NavLinks, 
  IconsContainer,
  NavItem,
  DropdownMenu,
  CollectionCard
} from './styles';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  
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
    <HeaderContainer>
      <Nav>
        <NavLinks>
          <NavItem>
            <Link to="/shop">SHOP ALL <ChevronRight className="chevron-right" size={14} /></Link>
          </NavItem>
          <Link to="/collections">
            <NavItem>
              <div>COLLECTIONS <ChevronRight className="chevron-right" size={14} /></div>
              <DropdownMenu className="dropdown">
                <div className="dropdown-content">
                  {collections.map((collection) => (
                    <Link to={`/collections/${collection.name.toLowerCase().replace(/\s+/g, '-')}`} key={collection.id}>
                      <CollectionCard>
                        <img src={collection.image} alt={collection.name} />
                        <h3>{collection.name}</h3>
                      </CollectionCard>
                    </Link>
                  ))}
                </div>
              </DropdownMenu>
            </NavItem>
          </Link>
          <Link to="/outlet">OUTLET</Link>
        </NavLinks>
        
        <Link to="/">
          <Logo>
            <img src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202412190928" alt="Furia" />
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