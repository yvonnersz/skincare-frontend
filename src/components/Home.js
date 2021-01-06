import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Products products={this.props.products} />
            </div>
        )
    }
}

export default Home