import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { FormField } from '../Forms';
import { white, black, medium } from '../../constants/styles';
import Button from '../Button';

const FormSidebar = ({ pageSaving, page }) => {

  // It's possible that page doesn't exist in the DB yet.
  // If that's the case, page.slug will be `undefined`.
  const newPage = page.slug ? false : true;

  const createdAt = moment(page.createdAt);
  const updatedAt = moment(page.updatedAt);

  const saveText = newPage ? 'Create' : 'Save';

  return (
    <aside className="Sidebar">
      <div>
        <Button block>
          { pageSaving ?  'Saving...' : saveText }
        </Button>

        { !newPage &&
          <span className="Sidebar__updatedAt">
            Updated
            <time dateTime={updatedAt.format()}>
              { updatedAt.fromNow() }
            </time>
          </span>
        }
      </div>

      <div>
        <FormField
          name="metaTitle"
          label="Page meta title"
          type="text"
          defaultValue={page.content.metaTitle}
          helptext="This is the title text that appears in search results (max 160 characters)"
        />
        <FormField
          name="metaDescription"
          label="Page meta description"
          type="text"
          defaultValue={page.content.metaDescription}
          helptext="This is the description text that appears below the title in search results"
        />
      </div>

      { !newPage &&
        <span className="Sidebar__createdAt">
          Created on
          <time datetime={createdAt.format()}>
            { createdAt.format('MMMM Do YYYY') }
          </time>
        </span>
      }

      <style jsx>{`
        div {
          background: ${white()};
          border-radius: 3px;
          border: 1px solid ${black(0.1)};
          margin: 0 0 10px;
          padding: 20px;
        }

        .Sidebar__updatedAt {
          display: block;
          font-size: 13px;
          margin-top: 10px;
          opacity: 0.4;
          position: relative;
          text-align: center;
          top: 5px;
        }

        .Sidebar__createdAt {
          display: block;
          font-size: 14px;
          margin-top: 14px;
          opacity: 0.2;
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
