import {Home} from './components/Home';
import {About} from './components/About';
import {Blog} from './components/Blog';
import {Route, Switch, Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/myportfolio" component={Home} exact />
        <Route path="/myportfolio/about" component={About} />
        <Route path="/myportfolio/Blog" component={Blog} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

function Navbar() {
    return (
      <div className="nav">
        <Link to="/myportfolio" className="nav-items">Home</Link>
        <Link to="/myportfolio/about" className="nav-items">About</Link>
        <Link to="/myportfolio/Blog" className="nav-items">Blog </Link>
      </div>
    );
};

export {App, Navbar};
