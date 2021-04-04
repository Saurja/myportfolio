import {Home} from './components/Home';
import {About} from './components/About';
import {Blog} from './components/Blog';
import {Route, Switch, Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

function Navbar() {
    return (
      <div className="nav">
        <Link to="/" className="nav-items">Home</Link>
        <Link to="/about" className="nav-items">About</Link>
        <Link to="/Blog" className="nav-items">Blog </Link>
      </div>
    );
};

export {App, Navbar};
