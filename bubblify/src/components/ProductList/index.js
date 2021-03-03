import React from "react";
import Product from "../Product";
import {PropTypes} from "prop-types";
import ProductDetails from "../ProductDetails";

const ProductList = ({products}) => (
        <div className="container-fluid padding">
            <div className="d-flex flex-row flex-wrap justify-content-center">

                    {products.map(p => <Product key={p.name} {...p} />)}

            </div>
        </div>
)

ProductList.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        id: PropTypes.number.isRequired
    }).isRequired
}

export default ProductList





