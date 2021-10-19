
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import Header from './components/Home/Shared/Header/Header';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import Login from './components/Home/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/service/:serviceId">
          <ServiceDetails></ServiceDetails>
        </Route>
      <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
