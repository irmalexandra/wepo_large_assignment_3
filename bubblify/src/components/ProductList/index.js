import React from "react";
import { Link } from 'react-router-dom'

const ProductList = ({products}) => (
        <div className="container-fluid padding">
            <div className="d-flex flex-row flex-wrap justify-content-center">

                    {products.map(p => <Product key={p.name} {...p} />)}

            </div>
        </div>
)

export default ProductList





