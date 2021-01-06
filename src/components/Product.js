const Product = (props) => {
    return (
        <div class="col-sm-4">
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.product.name}</h5>
                    <p class="card-text">{props.product.brand}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;