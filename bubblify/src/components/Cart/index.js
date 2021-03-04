import React from 'react'
import ProductList from "../ProductList";
import {getCartItems, clearCart} from "../../services/productService";
import {NavLink} from "react-router-dom";


class Cart extends React.Component {

    state = {
        products: [],
        delivery: true
    };

    async componentDidMount() {
        this.setState({
            products: await getCartItems()
        })

    }

    clearButtonHandler = () => {
        clearCart()
        this.setState({products: []});
    }

    checkoutHandler = () => {
        this.setState({delivery: document.getElementById("delivery").checked})
    }


    render() {
        return (<div id="cartBody">
            <h1>Cart</h1>
            <ProductList products={this.state.products}/>

            {this.state.products.length > 0 ?
                <div>
                    <button type="submit" className="btn btn-outline-secondary"
                            onClick={() => this.clearButtonHandler()}
                    >Clear cart
                    </button>
                    <br/>
                    <input type="radio" className="form-check-input" name="delivery-method" id="delivery"
                           defaultChecked={true} onChange={() => this.checkoutHandler()}/>
                    <label className="form-check-label">Delivery</label>
                    <br/>
                    <input type="radio" className="form-check-input" name="delivery-method" id="pick-up"
                           onChange={() => this.checkoutHandler()}/>
                    <label className="form-check-label">Pick up</label>
                    <br/>
                    {this.state.delivery === true ?
                        <NavLink className="btn btn-secondary" to="cart/delivery"
                        >Proceed to checkout</NavLink> :
                        <NavLink className="btn btn-secondary" to="cart/pickup">Proceed to
                            checkout</NavLink>}
                </div>

                : <h3>The cart is empty.</h3>
            }

        </div>);
    }

}

export default Cart;