import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Pages/homepage'
import login from './Pages/login';
import profile from './Pages/profile';
import forget from './Pages/forget'
import './styles/app.css'
import signup from './Pages/signup';
import chat from './Pages/chat';
import parameters from './Pages/parameters';
import firstarticles from './Pages/firstarticles';
import articles from './Pages/articles';
import { useEffect, useState } from 'react';

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("mail") !== null){
      setIsUserAuthenticated(true)
  }
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/" exact component= {isUserAuthenticated ? Homepage : login} />
        <Route path="/home" exact component={Homepage} />
        <Route path="/login" exact component={login} />
        <Route path="/signup" exact component={signup} />
        <Route path="/login/forget" exact component={forget} />
        <Route path="/profile" exact component={profile} />
        <Route path="/profile/chat" exact component={chat} />
        <Route path="/profile/parameters" exact component={parameters} />
        <Route path="/articles" exact component={articles} />
        <Route path="/articles/1" exact component={firstarticles} />
      </Switch>
    </Router>
  );
}

export default App;
