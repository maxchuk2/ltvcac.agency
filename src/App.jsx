import './scss/app.scss';
import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module';

import Home from './pages/home';
import Services from './pages/services';
import Analytics from './pages/analytics';
import Page404 from './pages/page404';
import Paid from './pages/paid';
import Portfolio from './pages/portfolio';
import Customer from './pages/customer';
import Project from './pages/Project';
import ToTopBtn from './Components/ToTopBtn/ToTopBtn';

function App() {
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const herosInfo = [
    {
      title: 'Hungry for your growth',
      subtitle: 'Performance digital marketing agency with focus on the US and Asia',
      heroImg: 'imgFirst',
    },
    {
      title: 'Mobile & Web Tracking',
      subtitle: 'Tracking system setup services for your project',
      heroImg: 'imgSixth',
    },
    {
      title: 'Lead generated',
      subtitle: 'Data-driven digital marketing for your customer’s base growing',
      heroImg: 'imgSecond',
    },
    {
      title: 'Customer Research',
      subtitle: 'Identify your customers needs with data-driven solutions',
      heroImg: 'imgThird',
    },
    {
      title: 'Our cases',
      subtitle: 'Some of the projects we worked on. Feel free to request for more!',
      heroImg: 'imgFourth',
    },
    {
      title: 'Services',
      subtitle: 'Some of the projects we worked on. Feel free to request for more!',
      heroImg: 'imgFifth',
    },
  ];

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-NNP4KS4',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <Header onClickMenu={(bool) => setOpenedMenu(bool)} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home hero={herosInfo[0]} />} />

            <Route path="/services" element={<Services hero={herosInfo[5]} />} />
            <Route path="/services/analytics" element={<Analytics hero={herosInfo[1]} />} />
            <Route path="/services/paid" element={<Paid hero={herosInfo[2]} />} />
            <Route path="/services/customer" element={<Customer hero={herosInfo[3]} />} />

            <Route path="/portfolio" element={<Portfolio hero={herosInfo[4]} />} />
            <Route path="/portfolio/:id" element={<Project />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>

        {openedMenu && <MobileMenu onClickClose={(bool) => setOpenedMenu(bool)} />}
        {offset > 100 ? <ToTopBtn /> : null}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
