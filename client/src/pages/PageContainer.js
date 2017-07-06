import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPages from './actions/fetch-pages';
import updatePage from './actions/update-page';
import Layout from '../components/Layout';

class PageContainer extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      Component,
      loading,
      pages,
      save,
      slug,
    } = this.props;

    if (loading)  {
      return <Layout><div>Loading...</div></Layout>;
    }

    // Get the page object from the store
    const page = pages.find(page => page.slug === slug);

    return <Component data={page} save={save} />;
  }
}

function mapStateToProps(state) {
  return state.pages;
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      dispatch(fetchPages());
    },
    save: (pageId, newData) => {
      dispatch(updatePage(pageId, newData));
    }
  };
}

// Expose a wrapping function so we can
// re-use this fetching container
const setupPage = (slug, pageComponent) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(props => (
    <PageContainer
      {...props}
      slug={slug}
      Component={pageComponent}
    />
  ));
};

export default setupPage;
