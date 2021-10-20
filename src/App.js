
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import Header from './components/Home/Shared/Header/Header';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import Login from './components/Home/Login/Login';
import Login1 from './components/Home/Login1/Login1';
import Register from './components/Home/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Membership from './components/Home/Membership/Membership';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/service/:serviceId">
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <PrivateRoute path="/member">
          <Membership></Membership>
        </PrivateRoute>
      <Route path="/login1">
        <Login1></Login1>
        </Route>
        <Route to="/registration">
          <Register></Register>
          </Route>
        {/* <Route path="/registration">
          <Registration></Registration>
        </Route> */}
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
