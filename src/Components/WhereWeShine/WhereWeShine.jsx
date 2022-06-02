import styles from './WhereWeShine.module.scss';

function WhereWeShine() {
  return (
    <section className="section section--title-left mb-60 mb-md-0">
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50 d-md-flex flex-column justify-content-between">
            <div className="section__title-box p-20 pt-80 pb-80 pt-md-100">
              <h2 className="section__title ta-left ta-md-right">
                WHERE
                <br />
                WE
                <br />
                SHINE
              </h2>
            </div>
            <a href="https://tally.so/r/wkdaBd/">
              <button className="button button--transparent ml-auto d-none d-md-block">
                CONTACT US
              </button>
            </a>
          </div>

          <div className="col-12 col-md-6 col-xl-4 offset-xl-2 m-auto pt-md-50 pb-md-50">
            <div className={`${styles.whereWeShine} ph-20`}>
              <div className={styles.item}>
                <h3 className="h3 mb-20">Paid advertising channels</h3>
                <p className={`${styles.text} mb-20`}>
                  We analyze your key KPIs and optimize ad campaigns to cover ALL of your target
                  audiences efficiently.
                </p>
                <a href="#" className={styles.link}>
                  FIND OUT MORE &#62;
                </a>
              </div>
              <div className={styles.item}>
                <h3 className="h3 mb-20">Paid advertising channels</h3>
                <p className={`${styles.text} mb-20`}>
                  We analyze your key KPIs and optimize ad campaigns to cover ALL of your target
                  audiences efficiently.
                </p>
                <a href="#" className={styles.link}>
                  FIND OUT MORE &#62;
                </a>
              </div>
              <div className={styles.item}>
                <h3 className="h3 mb-20">Paid advertising channels</h3>
                <p className={`${styles.text} mb-20`}>
                  We analyze your key KPIs and optimize ad campaigns to cover ALL of your target
                  audiences efficiently.
                </p>
                <a href="#" className={styles.link}>
                  FIND OUT MORE &#62;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereWeShine;
