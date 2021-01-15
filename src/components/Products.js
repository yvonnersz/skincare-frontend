import React from 'react';
import Product from './Product';

class Products extends React.Component {
    render() {
        return (
            <div class="row">
                {/* {this.props.products ? this.props.products.map(product => <Product key={product.id} product={product} />) : null} */}
                {this.props.products.map(product => <Product key={product.id} product={product} />)}
            </div>
        )
    }
}

export default Products;