import styles from './Hero.module.scss';

function Hero({ hero }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto col-md-8 col-xl-8">
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.subtitle}>{hero.subtitle}</p>
            <div className={styles.buttonWrap}>
              <a href="https://tally.so/r/wkdaBd/" className={`${styles.button} button`}>
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
