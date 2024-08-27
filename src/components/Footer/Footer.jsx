import styles from './footer.module.scss';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <div className={styles.footer}>© {currentYear} MissSomali.</div>;
};

export default Footer;
