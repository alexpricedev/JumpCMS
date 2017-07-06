import 'isomorphic-unfetch';

import Header from '../components/Header';
import { getInitialProps } from '../helpers';

const About = ({ content }) => (
  <div>
    <Header />
    <center>
      <h1>
        {content.heroHeadline}
      </h1>
      <span>
        {content.heroButtonText}
      </span>
      <br />
      <br />
      <p>
        {content.bodyText}
      </p>
    </center>
    <style jsx>{`
      span {
        background: pink;
        border-radius: 3px;
        color: white;
        display: inline-block;
        padding: 10px 20px;
      }
    `}</style>
  </div>
);

About.getInitialProps = getInitialProps;

export default About;
