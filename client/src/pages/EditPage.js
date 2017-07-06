import React from 'react';

import HomePage from './editor-views/HomePage';
import AboutPage from './editor-views/AboutPage';

const EditPage = ({ location }) => {

  // Get the current page slug
  const slug = location.pathname.split('/').pop();

  switch (slug) {
    case 'home':
      return <HomePage />;

    case 'about':
      return <AboutPage />;

    default:
      return <div>Error</div>;
  }
}

export default EditPage;
