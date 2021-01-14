import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import ProductShow from './components/ProductShow';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';

import { fetchProducts } from './actions/fetchProducts';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    axios.get('http://localhost:3000/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
        this.setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {}
        })
      }
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
  }
  
  componentDidMount() {
    this.checkLoginStatus();
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
  
        <Switch>
          <Route exact path='/' render={(routerProps) => <Home {...routerProps} loggedInStatus={this.state.loggedInStatus} /> } />
          <Route path='/products/:id' render={(routerProps) => <ProductShow {...routerProps} products={this.props.products} />} />
          <Route path='/products' render={(routerProps) => <Products {...routerProps} products={this.props.products} />} />
          <Route path='/registration' render={(routerProps) => <Registration {...routerProps} handleLogin={this.handleLogin} />} />
          <Route path='/login' render={(routerProps) => <Login {...routerProps} handleLogin={this.handleLogin} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      products: state.products
  }
}

export default connect(mapStateToProps, { fetchProducts })(App);
