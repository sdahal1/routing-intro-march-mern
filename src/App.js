import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import LoginPage from './components/LoginPage';
import Quotes from './components/Quotes';
import ThreeBoxes from './components/ThreeBoxes';
import Xbox from './components/Xbox';

function App() {
  return (
    <div className="App">
      <h1>Hello all the routes can see this h1</h1>
      {/* <Link to = "/dashboard">Dashboard</Link> */}
      {/* <a href="/login">Login Page</a> | <a href="/quotes"> Quotes Page</a> */}
      <Link to = "/login">Login Page</Link> | <Link to= "/quotes">Quotes Page</Link> | <Link to= "/play">Show three boxes</Link>

      <Router>
        <LoginPage path="/login"></LoginPage>
        <Quotes path="/quotes"></Quotes>
        <ThreeBoxes path="/play" favorieMovie= {"Harold and Kumar"}></ThreeBoxes>
        <Xbox path="/play/:num/:color"></Xbox>

      </Router>
    </div>
  );
}

export default App;
