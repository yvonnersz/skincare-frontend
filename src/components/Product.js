import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <div class="col-sm-4">
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"><Link to={`/products/${props.product ? props.product.id:null}`}>{props.product.name}</Link></h5>
                    <p class="card-text">{props.product.brand}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;