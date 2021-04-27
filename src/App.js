import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/Notfound/NotFound';
import LeaugeDetails from './Components/LeaugeDetails/LeaugeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">    
            <Home></Home>
          </Route>
          <Route exact path="/">      
            <Home></Home>
          </Route>
          <Route path="/leauge/:id">    
             <LeaugeDetails></LeaugeDetails>
          </Route >
          <Route path="*">      
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
