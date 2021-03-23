import './App.css';
import { Route, Switch } from "react-router-dom";
import Main from './components/home/Main'
import Admin from './components/admin/AdminMain'
import Welcome from './components/home/Welcome'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin/:id" children={Admin} />
        <Route path="/home" children={Main} />
        <Route exact path="/" children={Welcome} />
        
      </Switch>
    </div>
  );
}

export default App;
