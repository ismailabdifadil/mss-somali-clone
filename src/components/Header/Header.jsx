import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <ul>
          <li>
            <Link to="/">Miss Somali</Link>
          </li>
          <li>
            <Link to="/competitors">All Competitors</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
