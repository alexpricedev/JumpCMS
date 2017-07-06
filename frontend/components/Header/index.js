import Link from 'next/link';

const Header = () => (
  <nav>
    <ul>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/about'><a>About</a></Link></li>
    </ul>

    <style jsx>{`
      ul {
        border-bottom: 2px solid black;
        margin: 0 0 20px;
        padding: 0;
        text-align: center;
      }
      li {
        display: inline-block;
        padding: 10px;
      }
    `}</style>
  </nav>
);

export default Header;
