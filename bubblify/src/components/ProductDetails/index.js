import React from 'react';
import { PropTypes } from 'prop-types'
import { addToCart } from "../../services/productService";

class ProductDetails extends React.Component{
    render() {
        const {name, image, price, description, id} = this.props.product
        return (
            <div className="product-container">
                <div className="image-container">
                    <img src={image} className="img-fluid"
                         alt={"A picture of bubble product with id " + id}/>
                </div>
                <div className="product-details">
                    <h1>{name}</h1>
                    <hr className="light" />
                    <h2>Product Price</h2>
                    <p>{price}</p>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <button className="btn btn-outline-secondary add_to_cart_button" onClick={() => addToCart(id)}
                            id={id}>Add to Cart
                    </button>
                </div>
            </div>
        );
    }
}

ProductDetails.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        id: PropTypes.number.isRequired
    }).isRequired

}
export default ProductDetails;



/*

<div className="product-container">
    <div className="image-container">
        <img src={image} className="img-fluid"
             alt={"A picture of bubble product with id " + id}/>
    </div>
    <div className="product-details">
        <h1>{name}</h1>
        <hr className="light" />
        <h2>Product Price</h2>
        <p>{price}</p>
        <h2>Description</h2>
        <p>{description}</p>
        <button className="btn btn-outline-secondary add_to_cart_button" onClick={() => addToCart(id)}
                id={id}>Add to Cart
        </button>
    </div>
</div>*/
