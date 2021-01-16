import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import CountriesContextProvider from './context/countryContext';
import { Home, Country } from './pages';
import { Header } from './components';
import './App.scss';

function App() {
  return (
    <Router>
      <CountriesContextProvider>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/country/:countryCode' component={Country} />
          </Switch>
        </div>
      </CountriesContextProvider>
    </Router>
  );
}

export default App;
