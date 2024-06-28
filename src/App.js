import DashBoard from './DashBoard';
import NavBar from './NavBar';
import Heros from './Heros';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HeroDetails from './HeroDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className="content">
        <Switch>

          <Route path="/tour_of_heros/" exact>
          <DashBoard/>
          </Route>

          <Route path="/tour_of_heros/heros"  exact>
            <Heros/>
          </Route>

          <Route path="/heros/:id" exact>
            <HeroDetails/>
          </Route>


        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
