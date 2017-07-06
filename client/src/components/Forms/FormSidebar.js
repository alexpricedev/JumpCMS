import React from 'react';
import { connect } from 'react-redux';

import { white, black } from '../../constants/styles';
import Button from '../Button';

const FormSidebar = ({ saving }) => (
  <aside>
    <Button block>
      { saving ? 'Saving...' : 'Save' }
    </Button>

    <style jsx>{`
      aside {
        background: ${white()};
        border-radius: 3px;
        border: 1px solid ${black(0.1)};
        flex: 0 0 300px;
        margin: 0 0 0 30px;
        padding: 20px;
      }
    `}</style>
  </aside>
);

export default connect(s => s.pages)(FormSidebar);
