import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddScreen from './Admin/AddScreen';
import Admin from './Admin/Admin';
import './App.css';
import Cars from './Cars/Cars';
import Checkout from './Checkout.js/Checkout';
import Return from './Return/Return';
import Confirmation from './Confirmation/Confirmation';
import Footer from './Footer/Footer';
import HeaderOne from './HeaderOne/HeaderOne';
import HeaderTwo from './HeaderTwo/HeaderTwo';
import Home from './Home/Home';
import Registration from './Registration/Registration';
import SignInResult from './SignIn/SignInResult';
import cars from './cars';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import users from './users';
import OrderScreen from './Admin/OrderScreen';

function App() {
  const [state, dispatch] = useStateValue();

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/confirmation'>
            <HeaderOne />
            <HeaderTwo />
            <Confirmation />
          </Route>
          <Route path='/checkout'>
            <HeaderOne />
            <HeaderTwo />
            <Checkout />
          </Route>
          <Route path='/return'>
            <HeaderOne />
            <HeaderTwo />
            <Return />
          </Route>
          <Route path='/admin/orders'>
            <HeaderOne />
            <HeaderTwo />
            <OrderScreen />
            <Footer />
          </Route>
          <Route path='/carinfo/addcar'>
            <HeaderOne />
            <HeaderTwo />
            <AddScreen />
            <Footer />
          </Route>
          <Route path='/carinfo/totalcars'>
            <HeaderOne />
            <HeaderTwo />
            <Admin />
            <Footer />
          </Route>
          <Route path='/admin'>
            <HeaderOne />
            <HeaderTwo />
            <Admin />
            <Footer />
          </Route>
          <Route path='/rentcar'>
            <HeaderOne />
            <HeaderTwo />
            <Cars />
            <Footer />
          </Route>
          <Route path='/signin'>
            <HeaderOne />
            <HeaderTwo />
            <SignInResult />
          </Route>
          <Route path='/registration'>
            <HeaderOne />
            <HeaderTwo />
            <Registration />
          </Route>
          <Route path='/'>
            <HeaderOne />
            <HeaderTwo />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
