import './scss/app.scss';
import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Services from './pages/services';
import Analytics from './pages/analytics';
import Page404 from './pages/page404';
import Paid from './pages/paid';
import Portfolio from './pages/portfolio';
import Customer from './pages/customer';
import Project from './pages/Project';

// import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop';

function App() {
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const herosInfo = [
    {
      title: 'Hungry for your growth',
      subtitle: 'Performance digital marketing and customer acquisition in the US and Asia',
    },
    {
      title: 'Mobile & Web Analytics',
      subtitle: 'For startups, B2B SaaS and E-Commerce',
    },
    {
      title: 'Paid traffic acquisition',
      subtitle: 'Data-driven research aimed to find your customer’s needs',
    },
    {
      title: 'Customer Research',
      subtitle: 'Identify your customers needs with data-driven solutions',
    },
    {
      title: 'Projects',
      subtitle: 'Some of the projects we worked on. Feel free to request for more!',
    },
    {
      title: 'Services',
      subtitle: 'Some of the projects we worked on. Feel free to request for more!',
    },
  ];

  return (
    <div className="App">
      <Header onClickMenu={(bool) => setOpenedMenu(bool)} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home hero={herosInfo[0]} />} />

          <Route path="services" element={<Services hero={herosInfo[5]} />} />
          <Route path="services/analytics" element={<Analytics hero={herosInfo[1]} />} />
          <Route path="services/paid" element={<Paid hero={herosInfo[2]} />} />
          <Route path="services/customer" element={<Customer hero={herosInfo[3]} />} />

          <Route path="portfolio" element={<Portfolio hero={herosInfo[4]} />} />
          <Route path="/portfolio/:id" element={<Project />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      {openedMenu && <MobileMenu onClickClose={(bool) => setOpenedMenu(bool)} />}
      <Footer />
    </div>
  );
}

export default App;
