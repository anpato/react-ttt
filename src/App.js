import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css'
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Play Game</NavLink>
      </nav>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div>This is the home page</div>}
          />
          <Route path="/game" component={Game} />
        </Switch>
      </main>
    </div>
  )
}

export default App
