import styles from './Header.module.scss';
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <ul>
          <li>
            <a href="#">Miss Somali</a>
          </li>
          <li>
            <a href="#">All Competitors</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
