import styles from './ProjectFull.module.scss';
import { Link } from 'react-router-dom';

function ProjectFull() {
  return (
    <section className={styles.projectFull}>
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4 pt-60 pb-60">
            <div className="ph-20 ">
              <h3 className="h3 mb-20">Project overview</h3>
              <ul>
                <li></li>
              </ul>
              <p className="text-large mb-30">KeYou is a datertainment platform.</p>
              <p className="text-large mb-30">
                The initial task was to create a UX/UI design for a Live- streaming platform (mobile
                app) that combines social online entertainment and dating for LGBTQ+ members younger
                than 28 years old.
              </p>
              <p className="text-large mb-60">
                The main challenge was to unite in one project a live streaming part (solo live
                streams, group video chats, etc) and a dating part (chat module, video dates, etc).{' '}
              </p>
              <p className="text-large mb-60">
                Finally, we found a solution where users can easily use two separate parts – the
                dating part and the live streaming part respectively. Eventually, we got a
                datertainment (dating+entertainment) concept that came to fruition as a completed
                and launched project.
              </p>

              <h3 className="h3 mb-20">What we delivered</h3>
              <p className="text-large">• Conducted in-depth customer development􏰀</p>
              <p className="text-large">
                • Developed new efficient market positioning for the US market􏰀
              </p>
              <p className="text-large">
                • Designed and developed user-friendly and hooking iOS and Android mobile apps􏰀
              </p>
              <p className="text-large">
                • Designed and developed a cool new Laravel website for the app􏰀
              </p>
              <p className="text-large">• Revamped SEO to 15000 unique organic visits per month􏰀</p>
              <p className="text-large">
                • Launched targeted ads campaign for the iOS app (via Facebook Ads) - 8000 sign-ups
                per month.
              </p>
            </div>
          </div>
          {/* <div className="col-12 col-md-6 col-xl-7 offset-xl-1 lh-0">
              <picture className="lh-0">
                <source srcset="img/portfolio/keYou/1desk.jpg, img/portfolio/keYou/1desk@2x.jpg 2x" media="(min-width: 1200px)">
                <img src="img/portfolio/keYou" className="img" alt="" srcset="img/portfolio/keYou/1mob@2x.jpg 2x">
              </picture>
              <picture className="lh-0">
                <source srcset="img/portfolio/keyou/2desk.jpg, img/portfolio/keyou/2desk@2x.jpg 2x" media="(min-width: 1200px)">
                <img src="img/portfolio/keyou/2mob.jpg" className="img" alt="" srcset="img/portfolio/keyou/2mob@2x.jpg 2x">
              </picture>
              <picture className="lh-0">
                <source srcset="img/portfolio/keyou/3desk.jpg, img/portfolio/keyou/3desk@2x.jpg 2x" media="(min-width: 1200px)">
                <img src="img/portfolio/keyou/3mob.jpg" className="img" alt="" srcset="img/portfolio/keyou/3mob@2x.jpg 2x">
              </picture>
              <picture className="lh-0">
                <source srcset="img/portfolio/keyou/4desk.jpg, img/portfolio/keyou/4desk@2x.jpg 2x" media="(min-width: 1200px)">
                <img src="img/portfolio/keyou/4mob.jpg" className="img" alt="" srcset="img/portfolio/keyou/4mob@2x.jpg 2x">
              </picture>
              <picture className="lh-0">
                <img src="img/portfolio/keyou/5.jpg" className="img" alt="">
              </picture>
              <picture className="lh-0">
         
                <img src="img/portfolio/keyou/6.jpg" className="img" alt="">
              </picture>
            </div>*/}
        </div>
      </div>
    </section>
  );
}

export default ProjectFull;
