import React from 'react';
import PropTypes from 'prop-types';
import Product from "../Product";
import {addBundleToCart} from "../../services/productService";

const Bundle = ({id, name, items}) => (
    <div className="bundle-container mb-5">

        <h5 className="card-title">{name}</h5>
        <div className="product-container">
        {items.products.map(p => <Product key={p.name} {...p} />)}
        </div>
        <button className="btn btn-outline-secondary add_to_cart_button" onClick={() => addBundleToCart(id)}
                id={id}>Add to Cart
        </button>

    </div>


);

Bundle.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired
};

export default Bundle;