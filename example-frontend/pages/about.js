import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import { MiniHero } from '../components/Hero';
import getInitialProps from '../helpers/getInitialProps';
import { medium } from '../constants/styles';

const About = ({ meta, content }) => (
  <Layout meta={meta} page="about">
    <MiniHero content={content} />

    <Wrapper>
      <center>
        <p>
          {content.bodyText}
        </p>
      </center>
    </Wrapper>

    <style jsx>{`
      center {
        padding: 40px 10px;
      }

      p {
        font-size: 15px;
        margin: 0;
        padding: 0 20px;
        white-space: pre-line;
      }

      @media (min-width: ${medium}) {
        p {
          font-size: 18px;
          padding: 0 100px;
        }
      }
    `}</style>
  </Layout>
);

About.getInitialProps = getInitialProps;

export default About;
