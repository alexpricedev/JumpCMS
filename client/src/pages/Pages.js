import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import fetchPages, { service } from './actions/fetch-pages';
import Layout, { LayoutTitle } from '../components/Layout';
import { white, darkgreen, green } from '../constants/styles';

const Pages = ({ pages }) => (
  <Layout>
    <LayoutTitle>
      Your Pages

      <a
        href=""
        onClick={e => {
          e.preventDefault();
          var title = prompt("Page title");

          if (title != null) {
            service.create({
              title,
              slug: title.toLowerCase()
            });
          }
        }}
      >
        Create new
      </a>
    </LayoutTitle>

    <ul>
      { pages.map(page => (
          <li key={page._id}>
            <Link
              className="Pages__link"
              title={`Edit your ${page.title} page`}
              to={`/pages/${page.slug}`}
            >
              { page.title }
            </Link>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      a {
        border-radius: 3px;
        border: 1px solid ${darkgreen()};
        color: ${white()};
        display: inline-block;
        font-size: 0.7em;
        margin-left: 12px;
        padding: 6px 8px;
        background: ${green()};
        text-decoration: none;
        transition: background 0.3s ease;
      }

      a:hover {
        background: ${darkgreen()};
      }

      :global(.Pages__link) {
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.05);
        color: inherit;
        display: block;
        margin: 0 0 10px;
        padding: 20px;
        position: relative;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      :global(.Pages__link:hover) {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </Layout>
);

class PagesContainer extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, pages } = this.props;

    return loading ?
      <Layout><div>Loading...</div></Layout> :
      <Pages pages={pages} />;
  }
}

function mapStateToProps(state) {
  return state.pages;
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      dispatch(fetchPages());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer);
