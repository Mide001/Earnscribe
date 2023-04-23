import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingMain from "./components/LandingMain";
import userLogin from "./components/userLogin";
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingMain} />
          <Route path="/login" component={userLogin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;
