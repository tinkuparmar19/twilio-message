import LandingPage from './LandingPage'
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../AuthContext'
import Signup from './Signup';
import Home from './Home'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
        <div className='App'>
          <Router>
            <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/home' component={Home} />
              <Route path='/' exact >
                <LandingPage />  
              </Route>
              <Route path='/login' >
                <Login />
              </Route>
              <Route path='/register' >
                <Signup />
              </Route>
              <Route path='/home' >
                <Home />
              </Route>
            </Switch>
            </AuthProvider>
          </Router>
        </div>
  );
}

export default App;