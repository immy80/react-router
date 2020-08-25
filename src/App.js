import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import Error from './components/Error';

class App extends Component {
  state = {
    cart: '',
  };

  addToCart = (product) => {
    this.setState({
      cart: this.state.cart + 1,
    });
    console.log(product);
    console.log('Clicked');
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav basketNumbers={this.state.cart.length} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/shop'
              render={() => <Shop addToCart={this.addToCart} />}
            />
            <Error />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
