import React from "react";


const ProductDetails = ({product}) => (
    <div>
        <div className="container-fluid text-left product-container">
            <div className="row padding justify-content-center">
                <div className="container-fluid justify-content-center text-center">
                    <h1>{product.name}</h1>
                    <hr className="light"/>
                </div>
                <div className="col-md-6 col-xs-12 col-sm-12 text-center">
                    <img src={product.image} className="img-fluid"
                         alt={"A picture of bubble product with id" + product.image}/>
                </div>
                <div className="col-md-6 col-xs-12 col-sm-12">
                    <br/>
                    <br/>
                    <br/>
                    <h2>Description</h2><p>{product.description}</p>
                    <button class="btn btn-outline-secondary add_to_cart_button"
                            id="{{ product.id }}">Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>


)

export default ProductDetails

