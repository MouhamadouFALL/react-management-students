import { BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Classroom from './components/Classroom';

import About from './components/pages/About'
import Header from './components/layout/Header';

function App() {
  return (

    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/">
          <Classroom nom="JS DEV"/>
        </Route>
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
