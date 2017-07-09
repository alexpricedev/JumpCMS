import React from 'react';

import {
  FormBody,
  FormSection,
  FormField
} from '../../components/Forms';

const AboutPage = ({ page }) => (
  <FormBody>
    <FormSection title="Mini hero">
      <FormField
        defaultValue={page.content.heroHeadline}
        helptext="Enter a catchy headline for this page"
        label="Mini hero headline"
        name="heroHeadline"
        type="text"
      />
    </FormSection>
    <FormSection title="Main Content">
      <FormField
        defaultValue={page.content.bodyText}
        helptext="Enter the main body text here"
        label="Body Text"
        name="bodyText"
        type="textarea"
      />
    </FormSection>
  </FormBody>
);

export default AboutPage;
