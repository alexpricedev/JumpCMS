import React from 'react';

import {
  FormBody,
  FormSection,
  FormTextarea,
  FormField
} from '../../components/Forms';

const HomePage = ({ page }) => (
  <FormBody>
    <FormSection title="Hero">
      <FormField
        name="heroHeadline"
        label="Hero headline"
        type="text"
        defaultValue={page.content.heroHeadline}
        helptext="Enter a powerful statement about your business"
      />
      <FormField
        name="heroSubHeadline"
        label="Hero sub-headline"
        type="text"
        defaultValue={page.content.heroSubHeadline}
        helptext="This text appears below the headline. Enter something to backup your headline"
      />
      <FormField
        name="heroButtonText"
        label="Hero button text"
        type="text"
        defaultValue={page.content.heroButtonText}
        small
      />
    </FormSection>
    <FormSection title="Leader">
      <FormField
        name="leaderTitle"
        label="Leader title"
        type="text"
        defaultValue={page.content.leaderTitle}
      />
      <FormTextarea
        name="leaderText"
        label="Leader text"
        defaultValue={page.content.leaderText}
      />
    </FormSection>
  </FormBody>
);

export default HomePage;
