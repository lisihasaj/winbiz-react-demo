import React, {useState} from 'react';
import './styling/App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SupportPage from './pages/SupportPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/footer/Footer';
import Formations from "./pages/Formations";
import FormationsContact from './pages/FormationSubscribe';
import NavbarAnimateContextProvider from './context/NavbarAnimateContext';

function App() {
  //Change Nav items color
  const [navItems, setNavItems] = useState(false);
  const handleSetNavItem = (value) => {
    setNavItems(value);
  }

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        <NavbarAnimateContextProvider>
          <Navbar navItems={navItems} />
        </NavbarAnimateContextProvider>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/product'>
            <ProductPage />
          </Route>
          <Route path='/support'>
            <SupportPage />
          </Route>
          <Route path='/community'>
            <CommunityPage />
          </Route>
          <Route path='/formations'>
            <Formations />
          </Route>
          <Route path='/subscribe'>
            <FormationsContact setNavItems={handleSetNavItem} />
          </Route>
          <Route path='/contact'>
            <ContactPage setNavItems={handleSetNavItem} />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;