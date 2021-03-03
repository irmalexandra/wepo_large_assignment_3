import React from 'react';
import {getProducts} from "../services/productService";
import ProductList from "../components/ProductList";

class PreviousOrders extends React.Component {
    state = {
        products: [],
        telephone: 0,
    };

    async changeTelephoneState() {
        const telNumber = document.getElementById("telephoneInput").value
        // TODO SET STATE PRODUCTS TO WHAT NEW PRODUCT SERVICE FUNCTION RETURNS GET BY TELEPHONE NUMBER
        this.setState({telephone: telNumber})

    }

    render() {
        return (
            <div>
                {this.state.telephone !== 0 ? <div>
                    <h1>Previous Orders</h1>
                    </div> :
                    <div>
                    <label>Telephone</label>
                        <input id="telephoneInput" type="text" placeholder="Enter Telephone number"/>
                        <button onClick={() => this.changeTelephoneState()}>
                            Get Orders
                    </button>
                    </div>
                }

                <div id = "body">

                </div>
            </div>





        )
    }
}

export default PreviousOrders