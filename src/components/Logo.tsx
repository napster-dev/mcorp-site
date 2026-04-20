import React from 'react';

export const MainLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src="/assets/Mcorp_Logo.png"
      alt="Mcorp Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export const HeaderLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src="/assets/logo_header.png"
      alt="Mcorp Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export const LoadingLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src="/assets/logo_loading.png"
      alt="Mcorp Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
