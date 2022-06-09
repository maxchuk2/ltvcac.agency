import styles from './Footer.module.scss';
import logoSvg from './img/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.logo} mb-60 d-md-none`}>
          <img src={logoSvg} width={125} height={125} alt="logo" />
        </div>

        <nav className={`${styles.footerNav} mb-60 mb-md-0`}>
          <ul>
            <li>
              <Link to="ltvcac/">About Us</Link>
            </li>
            <li>
              <Link to="/ltvcac/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/ltvcac/services">Sevices</Link>
            </li>
          </ul>
        </nav>
        <p className={`${styles.footerText} mb-60 mb-md-0`}>
          1054 Budapest, Honved utca 8. 1. em. 2<br />
          SELLION Europe Kft. (HU29017043)
        </p>
        <p className={styles.footerText}>LTV:CAC Agency © 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
