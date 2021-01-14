import './App.css';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import ProductShow from './components/ProductShow';
import Registration from './components/auth/Registration';

import { fetchProducts } from './actions/fetchProducts';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products/:id' render={(routerProps) => <ProductShow {...routerProps} products={this.props.products} />} />
          <Route path='/products' render={(routerProps) => <Products {...routerProps} products={this.props.products} />} />
          <Route path='/registration' render={(routerProps) => <Registration {...routerProps} />} />
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
