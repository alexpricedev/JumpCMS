import { maxWidth, } from '../../constants/styles';

const Wrapper = ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        max-width: ${maxWidth};
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Wrapper;
