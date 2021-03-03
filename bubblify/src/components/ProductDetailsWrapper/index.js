import React from 'react';
import { getProductById } from "../../services/productService"
import ProductDetails from "../ProductDetails";

class ProductDetailsWrapper extends React.Component {

    state = {
        product: {}
    };


    async componentDidMount() {

        let product = await getProductById(this.props.match.params.productId);
        if(product){
            this.setState({product: product});
        }
    };
    render() {
        const {name, image, price, id, description} = this.state.product
        const product = {
            name: name,
            image: image,
            price: price,
            id: id,
            description: description
        }
        return (
            <ProductDetails product={this.state.product}/>
        );


    }
}

export default ProductDetailsWrapper