import React from 'react'
import ProductList from "../ProductList";
import {getCartItems, clearCart} from "../../services/productService";



class Cart extends React.Component {

    state = {
        products: [],
    };

    async componentDidMount() {
        this.setState({
            products: await getCartItems()
        })
    }
    handleClick = () => {
        clearCart()
        this.setState({products: []});
    }

    render() {
        return (<div>
            <h1>Cart</h1>
            <ProductList products={this.state.products} />
            <button type="submit" className="btn btn-outline-secondary" onClick={() => this.handleClick()}
                    >Clear cart
            </button>
        </div>);
    }
}

export default Cart;