import Link from 'next/link';

import Wrapper from '../Wrapper';
import { white, black } from '../../constants/styles';

const Header = ({ page }) => {
  const linkCls = p => p === page ? 'active' : '';

  return (
    <nav>
      <Wrapper>
        <div>
          <h1>
            <Link href='/'><a>JumpCMS Example</a></Link>
          </h1>

          <ul>
            <li>
              <Link href='/'>
                <a className={linkCls('home')}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className={linkCls('about')}>
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>

      <style jsx>{`
        nav {
          background: ${white};
          border-bottom: 1px solid ${black(0.1)};
        }

        div {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        h1 {
          flex: 0 0 auto;
          font-size: 18px;
          margin: 0;
        }

        ul {
          margin: 0;
          padding: 0;
          text-align: center;
        }

        li {
          display: inline-block;
        }

        a {
          color: inherit;
          display: block;
          padding: 10px 14px;
          text-decoration: none;
        }

        a:hover,
        a.active {
          background: ${black(0.05)};
        }
      `}</style>
    </nav>
  );
};

export default Header;
