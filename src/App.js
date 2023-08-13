import MainLayout from './components/MainLayout';
import authorImage from './images/avatar-michelle.jpg';
import mainImage from './images/drawers.jpg';

import './App.css';

function App() {
  const mainContentData = {
    title:
      'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
    description:
      'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
    author: {
      name: 'Michelle Appleton',
      imageSrc: authorImage,
    },
    date: '28 Jun 2020',
    imageSrc: mainImage,
    imageAlt: 'Main Image',
  };

  return <MainLayout {...mainContentData} />;
}

export default App;

// Shift the overall look and feel by adding these wonderful touches to furniture in your home Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete. Michelle Appleton 28 Jun 2020 Share
