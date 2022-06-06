import styles from './Hero.module.scss';
import React from 'react';

function Hero({ hero }) {
  return (
    <section className={`${styles.hero} ${styles[hero.heroImg]}`}>
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto col-md-8 col-xl-8">
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.subtitle}>{hero.subtitle}</p>
            {hero.tags && (
              <ul className={`${styles.tags} mb-30`}>
                {hero.tags.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            <div className={styles.buttonWrap}>
              <a href="https://tally.so/r/wkdaBd/" className={`${styles.button} button CTA`}>
                TELL US ABOUT YOUR PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
