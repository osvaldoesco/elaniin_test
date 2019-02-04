import React  from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Home} />
      <Route component={Error404} />
    </Switch>
  </App>;


export default AppRoutes;
