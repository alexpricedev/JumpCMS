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
        name="heroButtonText"
        label="Hero button text"
        type="text"
        defaultValue={page.content.heroButtonText}
        small
      />
    </FormSection>
    <FormSection title="Main Content">
      <FormTextarea
        name="bodyText"
        label="Body Text"
        defaultValue={page.content.bodyText}
        helptext="Enter your main body text here"
      />
    </FormSection>
  </FormBody>
);

export default HomePage;
