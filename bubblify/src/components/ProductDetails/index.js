import React from 'react';
import { getProductById} from "../../services/productService"
import {addToCart} from "../../services/productService";

class ProductDetails extends React.Component {

    state = {
        product: ''
    };

    async componentDidMount() {

        let product = await getProductById(this.props.match.params.productId);
        console.log("this is product state ----------> ", product)
        this.setState({product: product});
        console.log(document.getElementById('add_to_cart_button'))
    };


    render() {
        return (
            <div className="product-container">
                <div className="image-container">
                    <img src="" src={this.state.product.image} className="img-fluid"
                         alt={"A picture of bubble product with id " + this.state.product.image}/>
                </div>
                <div className="product-details">
                    <h1>{this.state.product.name}</h1>
                    <hr className="light" />
                        <h2>Product Price</h2>
                        <h2>Description</h2>
                        <p>{this.state.product.description}</p>
                        <button className="btn btn-outline-secondary add_to_cart_button" onClick={() => addToCart(this.state.product.id)}
                                id={this.state.product.id}> Add to Cart
                        </button>
                </div>
            </div>
        );
    }
}

export default ProductDetails;

