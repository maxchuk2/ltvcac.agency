import styles from './Footer.module.scss';
import logoSvg from './img/logo.svg';

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
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
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
