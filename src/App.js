import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/album/:id">
            <Album />
          </Route>

          <Route path="/profile/edit">
            <ProfileEdit />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/" exact>
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
