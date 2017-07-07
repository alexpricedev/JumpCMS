import 'isomorphic-unfetch';

import { api } from '../config.js';

const getInitialProps = async ({ pathname }) => {
  const res = await fetch(`${api.endpoint}/pages`);
  const json = await res.json();

  // Get the URL slug
  let slug = pathname.split('/').pop();

  // If there isn't a slug, we're on the home page
  slug = slug.length > 0 ? slug : 'home';

  // Get the data object for this page
  const page = json.data.find(p => p.slug === slug);

  return page;
};

export default getInitialProps;
