import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/contact">
            <h1>Contact Page</h1>
          </Route>
          <Route path="/">
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;