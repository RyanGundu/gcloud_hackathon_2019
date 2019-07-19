import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Landing from './pages/landing';
import Results from './pages/results';
import Questions from './pages/questions'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/data-collection" component={Questions} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;