import Wrapper from '../Wrapper';
import {
  black,
  orange,
  red,
  white,
  yellow,
  medium,
} from '../../constants/styles';

const Hero = ({ content }) => (
  <center>
    <h2>
      {content.heroHeadline}
    </h2>
    <h3>
      {content.heroSubHeadline}
    </h3>
    <a
      href="http://github.com/alexpriceonline/jumpcms"
      title="View JumpCMS on Github"
    >
      {content.heroButtonText}
    </a>

    <style jsx>{`
      center {
        background: ${red()};
        background: linear-gradient(to right, ${yellow()}, ${red()});
        padding: 50px 30px;
      }

      h2 {
        color: ${white()};
        font-size: 30px;
        font-weight: 700;
        margin: 20px 0;
        text-transform: uppercase;
      }

      h3 {
        color: ${white()};
        font-size: 20px;
        font-weight: 400;
        opacity: 0.7;
        margin: 0 0 30px;
      }

      a {
        background: transparent;
        border-radius: 3px;
        border: 3px solid ${white()};
        color: ${white()};
        display: inline-block;
        font-weight: 700;
        padding: 10px 20px;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.3s ease;
      }

      a:hover {
        background: ${white()};
        color: ${orange()};
      }

      @media (min-width: ${medium}) {
        center {
          padding: 100px 30px 80px;
        }

        h2 {
          font-size: 40px;
        }

        h3 {
          font-size: 26px;
        }
      }
    `}</style>
  </center>
);

export default Hero;
