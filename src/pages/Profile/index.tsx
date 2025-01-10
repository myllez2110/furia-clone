import React from 'react';
import { PageContainer , ProfileSection, ProfileForm } from '../styles';

export const Profile: React.FC = () => {
  return (
    <PageContainer>
      <ProfileSection>
        <ProfileForm>
          <div>
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button>SIGN IN</button>
          <p>Don't have an account? <a href="#">Create one</a></p>
        </ProfileForm>
      </ProfileSection>
    </PageContainer>
  );
};