import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './Header'
import Projects from './Projects'
import Cars from './Cars'
import HomePage from "./HomePage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/projects">
          <Header />
          <Projects />
        </Route>
        <Route exact path="/cars">
          <Header />
          <Cars />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
