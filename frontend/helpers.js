import 'isomorphic-unfetch';

const getInitialProps = async ({ pathname }) => {
  const res = await fetch('http://localhost:3030/pages')
  const json = await res.json()
  let slug = pathname.split('/').pop();
  slug = slug.length > 0 ? slug : 'home';
  const content = json.data.find(page => page.slug === slug).content;
  return { content };
};

export {
  getInitialProps
};
