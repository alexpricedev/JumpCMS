import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { white, black, medium } from '../../constants/styles';
import Button from '../Button';

const FormSidebar = ({ pageSaving, page }) => {

  // It's possible that page doesn't exist in the DB yet.
  // If that's the case, page.slug will be `undefined`.
  const newPage = page.slug ? false : true;

  const createdAt = moment(page.createdAt);
  const updatedAt = moment(page.updatedAt);

  return (
    <aside>
      <Button block>
        { pageSaving ? 'Saving...' : 'Save' }
      </Button>

      { !newPage &&
        <span>
          <div>
            Updated
            <time dateTime={updatedAt.format()}>
              { updatedAt.fromNow() }
            </time>
          </div>

          <div>
            Created on
            <time datetime={createdAt.format()}>
              { createdAt.format('MMMM Do YYYY') }
            </time>
          </div>
        </span>
      }

      <style jsx>{`
        aside {
          background: ${white()};
          border-radius: 3px;
          border: 1px solid ${black(0.1)};
          padding: 20px;
        }

        div {
          font-size: 14px;
          margin-top: 14px;
          opacity: 0.3;
          text-align: center;
        }

        time::before {
          content: ' ';
        }

        @media (min-width: ${medium}) {
          aside {
            flex: 0 0 300px;
            margin: 0 0 0 30px;
          }
        }
      `}</style>
    </aside>
  );
};

export default connect(
  state => state.pages
)(FormSidebar);
