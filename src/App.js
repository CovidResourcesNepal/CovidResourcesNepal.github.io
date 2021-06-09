import React from 'react'
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

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </main>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
