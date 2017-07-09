import React from 'react';
import Head from 'next/head';

import Header from './Header';
import { white, black } from '../../constants/styles';

const Layout = props => {
  const { page, meta, children } = props;

  return (
    <div>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        <title>{ meta.title }</title>

        <meta
          name="description"
          content={meta.description}
        />

        <link
          href={`https://fonts.googleapis.com/css?family=Open+Sans:400,700`}
          rel="stylesheet"
        />
      </Head>

      <Header page={page} />

      { children }

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          background: ${white};
          color: ${black};
          font-family: 'Open Sans';
          margin: 0px;
          min-height: 100vh;
        }

        body {
          height: 100%;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Layout;
