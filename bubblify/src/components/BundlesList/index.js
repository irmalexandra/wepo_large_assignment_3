import React from "react";
import {addBundleToCart} from "../../services/productService";
import ProductList from "../ProductList";

const BundlesList = ({bundles}) => (
    <div className="container-fluid padding">
            {bundles.map(b => <Bundle key={b.id} {...b} />)}
    </div>
)
export default BundlesList

