import React, { Component }from 'react';
import { connect } from 'react-redux';

import {
  createPage,
  updatePage,
} from './actions';
import {
  SET_CURRENT_PAGE,
  UPDATE_CURRENT_PAGE,
} from './constants';
import Layout, {
  LayoutTitle
} from '../components/Layout';
import {
  Breadcrumbs,
  Breadcrumb
} from '../components/Breadcrumbs';
import { FormSidebar } from '../components/Forms';
import { medium } from '../constants/styles';
import templates from './templates';

class EditPage extends Component {
  componentDidMount() {
    const { location, pages, setup } = this.props;

    // Get the current page slug
    const slug = location.pathname.split('/').pop();

    // Get the page object from the store, if it doesn't
    // exist then we return an empty content object
    const newPage = { slug, content: {} }
    const page = pages.find(p => p.slug === slug) || newPage;

    // Setup the store for the current page
    setup(page);
  }

  render() {
    const {
      currentPage: page,
      updateContent,
      updateMeta,
      save
    } = this.props;

    // We need to wait for the store to get initialised
    if (!page) {
      return null;
    }

    // Get the right page template
    let Template = templates[page.slug];

    return (
      <Layout>
        <Breadcrumbs>
          <Breadcrumb to="/pages/" title="Pages" />
          <Breadcrumb title={`${page.slug} Page`} />
        </Breadcrumbs>

        <LayoutTitle>{ page.slug } Page</LayoutTitle>

        <form
          onSubmit={e => {
            e.preventDefault();
            save(page._id);
          }}
        >
          <Template page={page} updateValue={updateContent} />
          <FormSidebar page={page} updateValue={updateMeta} />
        </form>

        <style jsx>{`
          @media (min-width: ${medium}) {
            form {
              align-items: flex-start;
              display: flex;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.app, ...state.pages };
}

function mapDispatchToProps(dispatch) {
  return {
    setup: page => {
      dispatch({ type: SET_CURRENT_PAGE, page });
    },
    updateContent: e => {
      dispatch({
        type: UPDATE_CURRENT_PAGE,
        group: 'content',
        key: e.target.name,
        value: e.target.value
      });
    },
    updateMeta: e => {
      dispatch({
        type: UPDATE_CURRENT_PAGE,
        group: 'meta',
        key: e.target.name,
        value: e.target.value
      });
    },
    save: (pageId) => {
      if (pageId) {
        dispatch(updatePage());
      } else {
        dispatch(createPage());
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
