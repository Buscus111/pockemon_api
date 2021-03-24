import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import CardsList from './components/CardsList/CardsList'
import CardInfo from './components/CardInfo/CardInfo'
import Info from './components/Info/Info'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoaderReact from './components/Loader/LoaderReact'

function App() {
  const loader = useSelector(state => state.loader)
  console.log(loader)
  return (
    <Router>
    <div className="App">
      <Header />
      <main className="App-main">
        {
            loader ? 
            <LoaderReact /> :
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cards">
                <CardsList />
              </Route>
              <Route  path="/info">
                <Info/>
              </Route>
              <Route  path="/cards/:id">
                <CardInfo/>
              </Route>
            </Switch>
        }
      </main>
    </div>

    </Router>
  );
}

export default App;
