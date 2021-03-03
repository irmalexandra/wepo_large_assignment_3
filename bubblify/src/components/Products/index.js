import React from 'react'
import ProductList from "../ProductList";
import {getProducts} from "../../services/productService"

class Products extends React.Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }

    render() {
        return (<div>
            <h1>Products</h1>
            <ProductList products={ this.state.products } />
        </div>);
    }
}


export default Products;