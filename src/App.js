import './App.css';
import Navbar from  './Components/Navbar';
import Students from './Components/Students';
import Notes from './Components/Notes';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Students} exact />
        <Route path="/edit/:id" component={Notes} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
