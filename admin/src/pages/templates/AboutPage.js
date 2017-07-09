import React from 'react';

import {
  FormBody,
  FormSection,
  FormTextarea,
  FormField
} from '../../components/Forms';

const AboutPage = ({ page }) => (
  <FormBody>
    <FormSection title="Mini hero">
      <FormField
        name="heroHeadline"
        label="Mini hero headline"
        type="text"
        defaultValue={page.content.heroHeadline}
        helptext="Enter a catchy headline for this page"
      />
    </FormSection>
    <FormSection title="Main Content">
      <FormTextarea
        name="bodyText"
        label="Body Text"
        defaultValue={page.content.bodyText}
        helptext="Enter the main body text here"
      />
    </FormSection>
  </FormBody>
);

export default AboutPage;
