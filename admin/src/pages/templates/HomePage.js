import React from 'react';

import {
  FormBody,
  FormSection,
  FormField
} from '../../components/Forms';

const HomePage = ({ errors, page, updateValue }) => (
  <FormBody>
    <FormSection title="Hero">
      <FormField
        errors={errors}
        helptext="Enter a powerful statement about your business"
        label="Hero headline"
        name="heroHeadline"
        onChange={updateValue}
        required
        type="text"
        value={page.content.heroHeadline}
      />
      <FormField
        errors={errors}
        helptext="This text appears below the headline. Enter something to backup your headline"
        label="Hero sub-headline"
        name="heroSubHeadline"
        onChange={updateValue}
        type="text"
        value={page.content.heroSubHeadline}
      />
      <FormField
        errors={errors}
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
        errors={errors}
        label="Leader title"
        name="leaderTitle"
        onChange={updateValue}
        type="text"
        value={page.content.leaderTitle}
      />
      <FormField
        errors={errors}
        label="Leader text"
        name="leaderText"
        onChange={updateValue}
        required
        type="textarea"
        value={page.content.leaderText}
      />
    </FormSection>
  </FormBody>
);

export default HomePage;
