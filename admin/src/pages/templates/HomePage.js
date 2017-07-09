import React from 'react';

import {
  FormBody,
  FormSection,
  FormField
} from '../../components/Forms';

const HomePage = ({ page, updateValue }) => (
  <FormBody>
    <FormSection title="Hero">
      <FormField
        helptext="Enter a powerful statement about your business"
        label="Hero headline"
        name="heroHeadline"
        onChange={updateValue}
        required
        type="text"
        value={page.content.heroHeadline}
      />
      <FormField
        helptext="This text appears below the headline. Enter something to backup your headline"
        label="Hero sub-headline"
        name="heroSubHeadline"
        onChange={updateValue}
        type="text"
        value={page.content.heroSubHeadline}
      />
      <FormField
        label="Hero button text"
        name="heroButtonText"
        onChange={updateValue}
        small
        type="text"
        value={page.content.heroButtonText}
      />
    </FormSection>
    <FormSection title="Leader">
      <FormField
        label="Leader title"
        name="leaderTitle"
        onChange={updateValue}
        type="text"
        value={page.content.leaderTitle}
      />
      <FormField
        label="Leader text"
        name="leaderText"
        onChange={updateValue}
        type="textarea"
        value={page.content.leaderText}
      />
    </FormSection>
  </FormBody>
);

export default HomePage;
