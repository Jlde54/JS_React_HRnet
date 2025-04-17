import { Link } from "react-router-dom";
import styles from '../styles/Header.module.scss'

function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>HRnet</h1>
        <nav className={styles.header__nav}>
          <Link to="/" className={styles.header__link}>Créer Employé</Link>
          <Link to="/employees" className={styles.header__link}>Employés</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;