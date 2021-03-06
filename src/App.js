import React, { useState } from 'react';

import './App.css';
import Header from './components/HEADER/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser,SetLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,SetLoggedInUser]}>
     
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/:productKey">
            <ProductDetail></ProductDetail>

          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>
          

        </Switch>
      </Router>




    </UserContext.Provider>
  );
}

export default App;
