import styles from './Header.module.scss';
import logoSvg from './img/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header({ onClickMenu }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`${styles.header} ${offset > 30 ? styles.scroll : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src={logoSvg} width={125} height={125} alt="logo" />
          </Link>

          <nav className={styles.mainNav}>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'fw-700 color-primary' : '')}
                  to="/">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'fw-700 color-primary' : '')}
                  to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className={styles.submenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'fw-700 color-primary' : '')}
                  to="/services">
                  Services
                </NavLink>
                <ul>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? 'fw-700 color-primary' : '')}
                      to="/services/customer">
                      CUSTOMER
                      <br />
                      DEVELOPMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? 'fw-700 color-primary' : '')}
                      to="/services/analytics">
                      ANALYTICS
                      <br />
                      SYSTEM SETUP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? 'fw-700 color-primary' : '')}
                      to="/services/paid">
                      LEAD
                      <br />
                      GENERATED
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className={styles.social}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/ltvcac-agency/">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 13.75V20"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10V10.0125"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 20V13.75"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 20V16.25C20 15.587 19.7366 14.9511 19.2678 14.4822C18.7989 14.0134 18.163 13.75 17.5 13.75C16.837 13.75 16.2011 14.0134 15.7322 14.4822C15.2634 14.9511 15 15.587 15 16.25"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://business.facebook.com/ltvcac/">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.75 12.5V17.5H12.5V26.25H17.5V17.5H21.25L22.5 12.5H17.5V10C17.5 9.66848 17.6317 9.35054 17.8661 9.11612C18.1005 8.8817 18.4185 8.75 18.75 8.75H22.5V3.75H18.75C17.0924 3.75 15.5027 4.40848 14.3306 5.58058C13.1585 6.75269 12.5 8.3424 12.5 10V12.5H8.75Z"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ltvcac.agency/">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 5H10C7.23858 5 5 7.23858 5 10V20C5 22.7614 7.23858 25 10 25H20C22.7614 25 25 22.7614 25 20V10C25 7.23858 22.7614 5 20 5Z"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.625 9.375V9.3775"
                      stroke="#23A6F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <button onClick={() => onClickMenu(true)} className={styles.menuBtn}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
