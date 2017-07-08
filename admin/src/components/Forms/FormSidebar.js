import React from 'react';
import { connect } from 'react-redux';

import { white, black, medium } from '../../constants/styles';
import Button from '../Button';

const FormSidebar = ({ pageSaving }) => (
  <aside>
    <Button block>
      { pageSaving ? 'Saving...' : 'Save' }
    </Button>

    <style jsx>{`
      aside {
        background: ${white()};
        border-radius: 3px;
        border: 1px solid ${black(0.1)};
        padding: 20px;
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

export default connect(
  state => state.pages
)(FormSidebar);
