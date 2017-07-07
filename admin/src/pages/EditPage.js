import React from 'react';
import { connect } from 'react-redux';

import updatePage from './actions/update-page';
import HomePage from './templates/HomePage';
import AboutPage from './templates/AboutPage';

const EditPage = props => {
  const { location, pages, save } = props;

  // Get the current page slug
  const slug = location.pathname.split('/').pop();

  // Get the page object from the store
  const page = pages.find(page => page.slug === slug);

  switch (slug) {
    case 'home':
      return <HomePage data={page} save={save} />;

    case 'about':
      return <AboutPage data={page} save={save} />;

    default:
      return <div>Error</div>;
  }
}

function mapStateToProps(state) {
  return { ...state.app, ...state.pages };
}

function mapDispatchToProps(dispatch) {
  return {
    save: (pageId, newData) => {
      dispatch(updatePage(pageId, newData));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
