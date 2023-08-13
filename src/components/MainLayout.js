import React from 'react';
import ImageContainer from './ImageContainer';
import MainContent from './MainContent';

const MainLayout = (props) => {
  const { imageSrc, imageAlt, ...mainContentProps } = props;

  return (
    <main>
      <ImageContainer imageSrc={imageSrc} imageAlt={imageAlt} />
      <MainContent {...mainContentProps} />
    </main>
  );
};

export default MainLayout;
