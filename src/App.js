import React from 'react'
import Header from './myQuestions/Header';
import Question1 from './myQuestions/Question1';
import Question2 from './myQuestions/Question2';
import Question3 from './myQuestions/Question3';
import Question4 from './myQuestions/Question4';
import Question5 from './myQuestions/Question5';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const appStyle = {
  textAlign : "center"
}

function App() {
  return (
    <>
    <h1 style={appStyle}>Assignment 1</h1>
     <Router>
     <Header />
      <Switch>
      <Route exact path="/Question-1">
      <Question1 />
      </Route>
      <Route exact path="/Question-2">
      <Question2 />
      </Route>
      <Route exact path="/Question-3">
      <Question3 />
      </Route>
      <Route exact path="/Question-4">
      <Question4 />
      </Route>
      <Route exact path="/Question-5">
      <Question5 />
      </Route>
      </Switch>
     </Router>
    </>
  );
}

export default App;
