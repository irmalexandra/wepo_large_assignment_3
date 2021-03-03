import React from "react";
import Product from "../Product";
import {PropTypes} from "prop-types";

const ProductList = ({products}) => (
        <div className="container-fluid padding">
            <div className="d-flex flex-row flex-wrap justify-content-center">
                    {products.map(p => <Product key={p.name} {...p} />)}
            </div>
        </div>
)

ProductList.propTypes = {
    // An array of objects
    products: PropTypes.arrayOf(PropTypes.shape({
        // The name of the product
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        // The unique id of the product
        id: PropTypes.number.isRequired
    })).isRequired
}

export default ProductList





