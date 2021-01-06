import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/fetchProducts';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect (mapStateToProps, { fetchProducts })(Home);