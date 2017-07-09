import React from 'react';

import {
  FormBody,
  FormSection,
  FormField
} from '../../components/Forms';

const HomePage = ({ page }) => (
  <FormBody>
    <FormSection title="Hero">
      <FormField
        defaultValue={page.content.heroHeadline}
        helptext="Enter a powerful statement about your business"
        label="Hero headline"
        name="heroHeadline"
        type="text"
      />
      <FormField
        defaultValue={page.content.heroSubHeadline}
        helptext="This text appears below the headline. Enter something to backup your headline"
        label="Hero sub-headline"
        name="heroSubHeadline"
        type="text"
      />
      <FormField
        defaultValue={page.content.heroButtonText}
        label="Hero button text"
        name="heroButtonText"
        small
        type="text"
      />
    </FormSection>
    <FormSection title="Leader">
      <FormField
        defaultValue={page.content.leaderTitle}
        label="Leader title"
        name="leaderTitle"
        type="text"
      />
      <FormField
        defaultValue={page.content.leaderText}
        label="Leader text"
        name="leaderText"
        type="textarea"
      />
    </FormSection>
  </FormBody>
);

export default HomePage;
