import Wrapper from '../Wrapper';
import {
  blue,
  medium,
  purple,
  white,
} from '../../constants/styles';

const MiniHero = ({ content }) => (
  <center>
    <h2>
      {content.heroHeadline}
    </h2>

    <style jsx>{`
      center {
        background: ${purple()};
        background: linear-gradient(to right, ${blue()}, ${purple()});
        padding: 40px 30px;
      }

      h2 {
        color: ${white()};
        font-size: 30px;
        font-weight: 700;
        margin: 20px 0;
        text-transform: uppercase;
      }

      @media (min-width: ${medium}) {
        center {
          padding: 60px 30px;
        }

        h2 {
          font-size: 40px;
        }
      }
    `}</style>
  </center>
);

export default MiniHero;
