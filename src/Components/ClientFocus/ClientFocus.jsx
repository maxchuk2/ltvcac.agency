import styles from './ClientFocus.module.scss';

function ClientFocus() {
  return (
    <section className={`${styles.focus} section`}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-xl-6 mb-60 mb-xl-0">
            <div className={styles.titleBox}>
              <h2 className="section__title section__title--large ta-center ta-xl-left">
                CLIENT
                <br />
                FOCUS
              </h2>
            </div>
          </div>
          <div className="col-12 col-xl-4 offset-xl-1 d-md-flex d-xl-block pt-xl-50 pb-xl-20">
            <div className={`${styles.content} mb-40`}>
              <h3 className={`${styles.title} h3 mb-10`}>Online startups</h3>
              <p className={`${styles.subtitle} mb-20`}>SaaS, Mobile Apps, E-commerce</p>
              <ul className={`${styles.list} mb-40 mb-md-0`}>
                <li className={`${styles.listSubtitle} mb-20`}>GET THESE JOBS DONE:</li>
                <li className={styles.listItem}>+ powerful sales funnel from scratch</li>
                <li className={styles.listItem}>
                  + identification of marketing challenges and customer pains
                </li>
                <li className={styles.listItem}>
                  + work on hypotheses based on operational data (pre-MVP)
                </li>
                <li className={styles.listItem}>+ customer acquisition channels scoring</li>
                <li className={styles.listItem}>+ unit economics analysis</li>
                <li className={styles.listItem}>+ powerful sales funnel from scratch</li>
                <li className={styles.listItem}>+ unit economics performance monitoring</li>
              </ul>
            </div>
            <div className={`${styles.content} mb-40`}>
              <h3 className={`${styles.title} h3 mb-10`}>Investors</h3>
              <p className={`${styles.subtitle} mb-20`}>Investment funds, accelerators, angels</p>
              <ul className={`${styles.list} mb-40 mb-md-0`}>
                <li className={`${styles.listSubtitle} mb-20`}>GET THESE JOBS DONE:</li>
                <li className="text">+ security of funds from investors worldwide</li>
                <li className="text">+ business operations optimization</li>
                <li className="text-grey fs-italic">
                  inquiry assessment / qualitative and quantitative market research / analysis of
                  competitors / marketing strategy / product development adjustment
                </li>
                <li className="text">+ customer acquisition channels scoring</li>
                <li className="text">+ unit economics analysis</li>
                <li className="text">+ powerful sales funnel from scratch</li>
                <li className="text">+ unit economics performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientFocus;
