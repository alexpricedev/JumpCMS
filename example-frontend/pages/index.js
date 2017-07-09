import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Hero from '../components/Hero';
import getInitialProps from '../helpers/getInitialProps';
import { medium } from '../constants/styles';

const Index = ({ content }) => (
  <Layout meta={{}} page="home">
    <Hero content={content} />

    <Wrapper>
      <center>
        <h2>
          {content.leaderTitle}
        </h2>
        <p>
          {content.leaderText}
        </p>
      </center>
    </Wrapper>

    <style jsx>{`
      center {
        padding: 40px 30px;
      }

      h2 {
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 20px;
      }

      p {
        font-size: 15px;
        margin: 0;
        padding: 0 20px;
      }

      @media (min-width: ${medium}) {
        center {
          padding: 100px 30px 80px;
        }

        h2 {
          font-size: 32px;
        }

        p {
          font-size: 18px;
          padding: 0 40px;
        }
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = getInitialProps;

export default Index;
