import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
// import News from './components/News';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/product' component={Products}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          {/* <Route path='/news' component={News} /> */}
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
