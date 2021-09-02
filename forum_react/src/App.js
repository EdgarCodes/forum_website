import { Switch, Route } from 'react-router-dom';
import './CSS/App.css';
import Home from './Pages/Home'
import About from "./Pages/About"
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
