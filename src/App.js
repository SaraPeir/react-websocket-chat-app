import React from 'react';
import LoginForm from './components/Form/LoginForm'
import Chat from './components/Chat/Chat'
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/">
            <LoginForm /> 
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
    </React.Fragment>
  );
}

export default App;
