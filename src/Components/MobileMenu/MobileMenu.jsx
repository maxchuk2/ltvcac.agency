import styles from './MobileMenu.module.scss';
import logoSvg from './img/logo.svg';

import React from 'react';

function MobileMenu() {
  const [openSubmenu, setOpenSubmenu] = React.useState(false);

  return (
    <div className={styles.mobileMenu}>
      <a href="/" className={styles.logo}>
        <img src={logoSvg}></img>
      </a>

      {openSubmenu && (
        <button onClick={() => setOpenSubmenu(!openSubmenu)} className={styles.back}>
          <svg
            width="54"
            height="43"
            viewBox="0 0 54 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5876 40.8252L19.587 40.8257C18.815 41.4826 17.6585 41.3876 17.0029 40.6172L17.0027 40.6171L1.43848 22.3197C1.39996 22.2746 1.37054 22.2324 1.3489 22.198C1.29906 22.1308 1.22834 22.0271 1.16951 21.8998L1.1693 21.8994C1.15119 21.8601 1.13818 21.8259 1.12921 21.8003C1.12498 21.7882 1.12136 21.7772 1.11846 21.7681C1.11179 21.7499 1.1065 21.7343 1.1025 21.7221C1.09871 21.7105 1.09557 21.7005 1.09364 21.6943L1.09074 21.6849C1.04464 21.5404 0.999996 21.3501 0.999996 21.1313C0.999996 20.9125 1.04468 20.7221 1.0908 20.5776L1.09347 20.569L1.10177 20.5428C1.10515 20.5324 1.10942 20.5196 1.11464 20.5049C1.11739 20.4959 1.12074 20.4854 1.12458 20.4739C1.13416 20.4455 1.14834 20.407 1.16865 20.363L1.16895 20.3623C1.22786 20.2349 1.2987 20.131 1.34855 20.0638C1.37008 20.0297 1.39933 19.9877 1.43755 19.9429L17.0028 1.64507L17.0034 1.64431C17.6589 0.875343 18.8146 0.78022 19.5864 1.43651L19.5876 40.8252ZM19.5876 40.8252C20.3558 40.1703 20.4531 39.0143 19.7954 38.2416M19.5876 40.8252L19.7954 38.2416M19.7954 38.2416L6.79967 22.9647L51.1667 22.9647C52.1795 22.9647 53 22.1442 53 21.1313C53 20.1185 52.1795 19.298 51.1667 19.298L6.79967 19.298L19.7955 4.02102C19.7955 4.021 19.7956 4.02098 19.7956 4.02097C20.4505 3.25115 20.3594 2.09389 19.587 1.43701L19.7954 38.2416ZM1.1104 21.7421L1.1116 21.7459C1.11074 21.7431 1.1101 21.7411 1.10988 21.7403L1.1104 21.7421Z"
              fill="#23A6F0"
              stroke="#23A6F0"
              strokeWidth="2"
            />
          </svg>
        </button>
      )}

      <button className={styles.close}>
        <svg
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1"
            y="35.3545"
            width="50"
            height="5"
            transform="rotate(-45 1 35.3545)"
            fill="#4CC9F0"
          />
          <rect
            x="35.9102"
            y="38.9443"
            width="50"
            height="5"
            transform="rotate(-135 35.9102 38.9443)"
            fill="#4CC9F0"
          />
        </svg>
      </button>

      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">PORTFOLIO</a>
          </li>
          <li>
            <span onClick={() => setOpenSubmenu(!openSubmenu)}>SERVICES</span>
            {openSubmenu && (
              <ul className={styles.submenu}>
                <li>
                  <a href="/">
                    CUSTOMER <br></br> DEVELOPMENT
                  </a>
                </li>
                <li>
                  <a href="/">
                    ANALYTICS <br></br> SYSTEM SETUP
                  </a>
                </li>
                <li>
                  <a href="/">
                    LEAD <br></br> GENERATION
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <a href="#" className="button button--secondary">
        CONTACT US
      </a>

      <div className={styles.social}>
        <ul>
          <li>
            <a href="/">
              <svg
                width="60"
                height="60"
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
            <a href="/">
              <svg
                width="60"
                height="60"
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
            <a href="/">
              <svg
                width="60"
                height="60"
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
    </div>
  );
}

export default MobileMenu;
