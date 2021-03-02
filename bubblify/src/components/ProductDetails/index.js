import React from 'react';
import { PropTypes } from 'prop-types'
import { getProductById} from "../../services/productService"
import { addToCart } from "../../services/productService";

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
        const { name, image, price, description, id } = this.state.product;

        return (
            <div className="product-container">
                <div className="image-container">
                    <img src="" src={this.state.product.image} className="img-fluid"
                         alt={"A picture of bubble product with id " + this.state.product.image}/>
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
        name: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string,
        id: PropTypes.number.isRequired
    }).isRequired
}
export default ProductDetails;

