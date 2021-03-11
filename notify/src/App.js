import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import Admin from './components/admin/adminHome'
import { Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
