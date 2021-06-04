import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from './components/Blog';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid container-md">
          <a className="navbar-brand" href="/">React Demo App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-md-2" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
