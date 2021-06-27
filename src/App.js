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
  const currLanguage = i18n.language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="App">
      <Router>
        <Header changeLng={changeLanguage} lng={currLanguage} t={t} />
        <main className="main">
          <Switch>
            <Route path="/about">
              <About t={t} lng={currLanguage}/>
            </Route>
            <Route path="/resources">
              <Resources t={t}/>
            </Route>
            <Route path="/">
              <Homepage t={t}/>
            </Route>
          </Switch>
        </main>
        <Footer t={t}/>
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

