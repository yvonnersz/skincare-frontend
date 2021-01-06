const ProductShow = (props) => {
    let product = props.products.filter(product => product.id === parseInt(props.match.params.id))[0]

    return (
        <div class="card" width="18rem">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{product ? product.name : null}</h5>
            <p class="card-text">{product ? product.brand : null}</p>
        </div>

        <ul class="list-group list-group-flush">
            {product.ingredient_list.map(ingredient => <li class="list-group-item">{ingredient}</li>)}
        </ul>
        </div>
    )
}

export default ProductShow;