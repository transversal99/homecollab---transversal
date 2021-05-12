import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Pages/homepage'
import login from './Pages/login';
import profile from './Pages/profile';
import forget from './Pages/forget'
import './styles/app.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={login} />
        <Route path="/login/forget" exact component={forget} />
        <Route path="/profile" exact component={profile} />
      </Switch>
    </Router>
  );
}

export default App;
