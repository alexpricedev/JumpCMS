import React from 'react';

import Layout, {
  LayoutTitle
} from '../components/Layout';
import {
  FormBody,
  FormSection,
  FormSidebar,
  FormTextarea,
  FormField
} from '../components/Forms';

const HomePage = () => (
  <Layout>
    <LayoutTitle>Home Page</LayoutTitle>
    <form action="">
      <FormBody>
        <FormSection title="Hero">
          <FormField
            name="hero-headline"
            label="Hero headline"
            type="text"
            // value={form.bussiness}
            // onChange={updateFormValue}
            helptext="Enter a powerful statement about your business"
            // error={form.errors.business}
          />
          <FormField
            name="hero-button-text"
            label="Hero button text"
            type="text"
            // value={form.bussiness}
            // onChange={updateFormValue}
            // error={form.errors.business}
            small
          />
        </FormSection>
        <FormSection title="Main Content">
          <FormTextarea
            name="body-text"
            label="Body Text"
            // value={form.bussiness}
            // onChange={updateFormValue}
            helptext="Enter your main body text here"
            // error={form.errors.business}
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


export default HomePage;
