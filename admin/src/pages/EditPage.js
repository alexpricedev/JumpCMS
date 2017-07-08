import React from 'react';
import { connect } from 'react-redux';
import getFormData from 'get-form-data';

import { createPage, updatePage } from './actions';
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

const EditPage = props => {
  const { location, pages, save } = props;

  // Get the current page slug
  const slug = location.pathname.split('/').pop();

  // Get the page object from the store
  const page = pages.find(p => p.slug === slug) || { content: {} };

  // Get the right page template
  let Template = templates[slug];

  return (
    <Layout>
      <Breadcrumbs>
        <Breadcrumb to="/pages/" title="Pages" />
        <Breadcrumb title={`${slug} Page`} />
      </Breadcrumbs>

      <LayoutTitle>{ slug } Page</LayoutTitle>

      <form
        onSubmit={e => {
          e.preventDefault();
          const content = getFormData(e.target);
          save(page._id, { slug, content });
        }}
      >
        <Template page={page} />
        <FormSidebar page={page} />
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

function mapStateToProps(state) {
  return { ...state.app, ...state.pages };
}

function mapDispatchToProps(dispatch) {
  return {
    save: (pageId, newData) => {
      if (pageId) {
        dispatch(updatePage(pageId, newData));
      } else {
        dispatch(createPage(newData));
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
