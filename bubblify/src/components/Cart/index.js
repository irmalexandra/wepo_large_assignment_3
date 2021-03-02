import React from 'react'
import ProductList from "../ProductList";
import { getCartItems } from "../../services/productService";


class Cart extends React.Component {

    state = {
        products: [],
    };

    async componentDidMount() {
        this.setState({
            products: await getCartItems()
        })
    }

    render() {
        return (<div>
            <h1>Cart</h1>
            <ProductList products={this.state.products} />
        </div>);
    }
}

export default Cart;