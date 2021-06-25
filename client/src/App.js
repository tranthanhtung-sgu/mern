import './App.css';
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import Dashboard from './components/dasboard/Dashboard'
import Home from './components/home/Home'
import { BrowserRouter } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  let history=useHistory()
  return (
    <BrowserRouter >
      <Router history={history}>
        <Switch>
          <Route path="/home"><Home></Home> </Route>
          <Route path="/admin" render={() => {
            return localStorage.getItem("accessToken") === 'true' ? <Dashboard /> : <Redirect to="/login" />
          }}>
          </Route>
          <Route path="/register">
            <SignOut></SignOut>
          </Route>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>


        </Switch>

      </Router>
    </BrowserRouter>
  );
}

export default App;
