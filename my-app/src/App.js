import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from './view/login/login'
import Home from './view/home/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
