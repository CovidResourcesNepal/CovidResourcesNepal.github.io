import React, {Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// App Components and Pages
import Footer from './components/Footer'
import Header from './components/Header'
import Resources from './pages/Resources'
import Homepage from './pages/Homepage'
import About from './pages/About'
// Stylesheets
import './style.scss';
import './App.css';
import { useTranslation } from 'react-i18next';

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Router>
        <Header changeLng={changeLanguage} lng={i18n.language}/>
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/">
              <Homepage t={t}/>
            </Route>
          </Switch>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Page />
    </Suspense>
  );
}

