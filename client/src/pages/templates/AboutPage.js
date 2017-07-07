import React from 'react';

import Layout, {
  LayoutTitle
} from '../../components/Layout';
import {
  Breadcrumbs,
  Breadcrumb
} from '../../components/Breadcrumbs';
import {
  FormBody,
  FormSection,
  FormSidebar,
  FormTextarea,
  FormField
} from '../../components/Forms';

const AboutPage = ({ data, save }) => (
  <Layout>
    <Breadcrumbs>
      <Breadcrumb to="/pages/" title="Pages" />
      <Breadcrumb title="About Page" />
    </Breadcrumbs>

    <LayoutTitle>{ data.title } Page</LayoutTitle>

    <form
      onSubmit={e => {
        e.preventDefault();

        const content = {
          heroHeadline: e.target.heroHeadline.value,
          heroButtonText: e.target.heroButtonText.value,
          bodyText: e.target.bodyText.value
        };

        save(data._id, { content });
      }}
    >
      <FormBody>
        <FormSection title="Hero">
          <FormField
            name="heroHeadline"
            label="Hero headline"
            type="text"
            defaultValue={data.content.heroHeadline}
            helptext="Enter a powerful statement about your business"
          />
          <FormField
            name="heroButtonText"
            label="Hero button text"
            type="text"
            defaultValue={data.content.heroButtonText}
            small
          />
        </FormSection>
        <FormSection title="Main Content">
          <FormTextarea
            name="bodyText"
            label="Body Text"
            defaultValue={data.content.bodyText}
            helptext="Enter your main body text here"
          />
        </FormSection>
      </FormBody>

      <FormSidebar />

      <style jsx>{`
        form {
          align-items: flex-start;
          display: flex;
        }
      `}</style>
    </form>
  </Layout>
);

export default AboutPage;
