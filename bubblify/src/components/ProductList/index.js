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

export default ProductList





