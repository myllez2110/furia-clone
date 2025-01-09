import React from 'react';
import { HeroSection, HeroContent, Title, Subtitle, CTAButton } from './styles';

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>WELCOME TO FURIA</Title>
        <Subtitle>
          Brazilian esports organization competing at the highest level in multiple games
        </Subtitle>
        <CTAButton>EXPLORE TEAMS</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};