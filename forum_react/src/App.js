import { Switch, Route } from 'react-router-dom';
import './CSS/App.css';
import Home from './Pages/Home'
import About from "./Pages/About"
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/about/:msg">
          <About />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
